export type Tag = {
    id: string;
    name: string;
    color: string;
};

export type BlogPost = {
    id: string;
    slug: string;
    cover: string;
    title: string;
    tags: Tag[];
    date: string;
    lastUpdated: string;
};

export type PostPage = {
    post: BlogPost;
    markdown: string;
};
