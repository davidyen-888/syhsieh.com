import { Client } from '@notionhq/client';
import { NotionToMarkdown } from 'notion-to-md';
import { BlogPost, PostPage } from '@/types/schema';

interface Cache {
    [key: string]: {
        data: any;
        timestamp: number;
    };
}

export default class NotionService {
    client: Client;
    notionToMarkdown: NotionToMarkdown;
    private cache: Cache;
    private cacheDuration: number;

    constructor() {
        this.client = new Client({ auth: process.env.NOTION_ACESS_TOKEN });
        this.notionToMarkdown = new NotionToMarkdown({
            notionClient: this.client,
        });
        this.cache = {};
        // Cache duration of 1 hour
        this.cacheDuration = 60 * 60 * 1000;
    }

    private getCacheKey(method: string, params?: any): string {
        return `${method}:${JSON.stringify(params)}`;
    }

    private getFromCache<T>(key: string): T | null {
        const cached = this.cache[key];
        if (!cached) return null;

        const now = Date.now();
        if (now - cached.timestamp > this.cacheDuration) {
            delete this.cache[key];
            return null;
        }

        return cached.data as T;
    }

    private setCache(key: string, data: any): void {
        this.cache[key] = {
            data,
            timestamp: Date.now(),
        };
    }

    async getAllBlogPosts(): Promise<BlogPost[]> {
        const cacheKey = this.getCacheKey('getAllBlogPosts');
        const cached = this.getFromCache<BlogPost[]>(cacheKey);
        if (cached) return cached;

        const databaseId = process.env.NOTION_DATABASE_ID ?? '';
        const response = await this.client.databases.query({
            database_id: databaseId,
            filter: {
                property: 'Published',
                checkbox: {
                    equals: true,
                },
            },
            sorts: [
                {
                    property: 'Created',
                    direction: 'descending',
                },
            ],
        });

        const posts = response.results.map((res) => {
            return NotionService.pageToPostTransformer(res);
        });

        this.setCache(cacheKey, posts);
        return posts;
    }

    async getLatestThreeBlogPosts(): Promise<BlogPost[]> {
        const databaseId = process.env.NOTION_DATABASE_ID ?? '';

        // list blog posts
        const response = await this.client.databases.query({
            database_id: databaseId,
            filter: {
                property: 'Published',
                checkbox:{
                    equals: true,
                },
            },
            sorts: [
                {
                    property: 'Created',
                    direction: 'descending',
                },
            ],
            page_size: 3,
        });

        return response.results.map((res) => {
            return NotionService.pageToPostTransformer(res);
        }
        );

    }

    async getBlogPostsByTag(tagName: string): Promise<BlogPost[]> {
        const databaseId = process.env.NOTION_DATABASE_ID ?? '';
      
        const response = await this.client.databases.query({
          database_id: databaseId,
          filter: {
            and: [
              {
                property: 'Tags',
                multi_select: {
                  contains: tagName,
                },
              },
              {
                property: 'Published',
                checkbox: {
                  equals: true,
                },
              },
            ],
          },
          sorts: [
            {
              property: 'Created',
              direction: 'descending',
            },
          ],
        });
      
        return response.results.map((res) => {
          return NotionService.pageToPostTransformer(res);
        });
      }
      
    async getSingleBlogPost(slug: string): Promise<PostPage> {
        const cacheKey = this.getCacheKey('getSingleBlogPost', { slug });
        const cached = this.getFromCache<PostPage>(cacheKey);
        if (cached) return cached;

        const databaseId = process.env.NOTION_DATABASE_ID ?? '';
        const response = await this.client.databases.query({
            database_id: databaseId,
            filter: {
                property: 'Slug',
                formula: {
                    string: {
                        equals: slug,
                    },
                },
            },
        });

        if (!response.results[0]) {
            throw new Error('Blog post not found');
        }

        const page = response.results[0];
        const mdBlock = await this.notionToMarkdown.pageToMarkdown(page.id);
        const markdown = this.notionToMarkdown.toMarkdownString(mdBlock);
        const post = NotionService.pageToPostTransformer(page);

        const result = { post, markdown };
        this.setCache(cacheKey, result);
        return result;
    }
        

    private static pageToPostTransformer(page: any): BlogPost {
        if (!page.properties) {
            throw new Error('Page properties are missing');
        }

        return {
            id: page.id,
            cover: page.cover,
            title: page.properties.Name.title[0].plain_text,
            tags: page.properties.Tags.multi_select,
            date: page.properties.Created.created_time,
            lastUpdated: page.last_edited_time,
            slug: page.properties.Slug.formula.string,
        };
    }

}