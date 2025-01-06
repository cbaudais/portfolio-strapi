import { type BlocksContent } from '@strapi/blocks-react-renderer';

export type strapiProjects = {
    documentId: number,
    title: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    slug: string;
    featured: boolean;
    descPreview: string;
    description: BlocksContent;
    date: string;
    categories: [
        {
            id: number;
            name: string;
            slug: string;
        }
    ];
    thumbnail: {
        url: string;
    };
}

export type strapiCategories = strapiProjects["categories"][number]