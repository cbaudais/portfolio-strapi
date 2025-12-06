export type strapiProjects = {
    documentId: number,
    title: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    slug: string;
    featured: boolean;
    excerpt: string;
    description: string;
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