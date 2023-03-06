import { Client } from '@notionhq/client';
import { NotionToMarkdown } from 'notion-to-md';
import { BlogPost, PostPage } from '@/types/schema';

export default class NotionService {
    client: Client;
    notionToMarkdown: NotionToMarkdown;

    constructor() {
        this.client = new Client({ auth: process.env.NOTION_ACESS_TOKEN });
        this.notionToMarkdown = new NotionToMarkdown({
            notionClient: this.client,
        });
    }

    async getAllBlogPosts(): Promise<BlogPost[]> {
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
        });
            
        

        return response.results.map((res) => {
            return NotionService.pageToPostTransformer(res);
        }
        );
        
    }

    async getSingleBlogPost(slug: string): Promise<PostPage> {
        const databaseId = process.env.NOTION_DATABASE_ID ?? '';

        // list of blog posts
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

        // get blog post
        const page = response.results[0];

        const mdBlock = await this.notionToMarkdown.pageToMarkdown(page.id);
        const markdown = this.notionToMarkdown.toMarkdownString(mdBlock);
        const post = NotionService.pageToPostTransformer(page);

        return {
            post,
            markdown,
        };
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
            slug: page.properties.Slug.formula.string,
        };
    }

}