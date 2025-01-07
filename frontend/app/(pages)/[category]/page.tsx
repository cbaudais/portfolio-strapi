import { FallbackFetch } from "@/components/ErrorFallback";
import { Section } from "@/components/Section";
import PostList from "@/components/PostList";
import { ErrorBoundary } from "react-error-boundary";
import { fetchAPI } from "@/utils/fetch-api";
import { strapiCategories } from "@/types/types";
import { notFound } from "next/navigation";

//fetch posts, filtered by categories
async function fetchByCategory(filter: string) {
    try {
        const token = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN;
        const options = { headers: { Authorization: `Bearer ${token}` } };
        const query = '/projects';
        const urlParamsObject = {
            filters: {
                categories: {
                    slug: filter
                },
            },
            populate: {
                categories: {
                    fields: ["id", "name", "slug"]
                },
                thumbnail: {
                    fields: ["url"]
                }
            },
        };
        const responseData = await fetchAPI(query, urlParamsObject, options);
        return responseData;
    } catch (error) {
        console.log(error);
    }
}

export default async function CategoryRoute({ params }: { params: Promise<{ category: string }> }) {
    const filter = (await params).category;
    const { data } = await fetchByCategory(filter);

    let exitLoop = false;
    let catName = filter;
    for (let i = 0; i < data.length; i++) {
        for (let j = 0; j < data[i].categories.length; j++) {
            if (data[i].categories[j].slug.includes(filter)) {
                catName = data[i].categories[j].name;
                exitLoop = true;
                break;
            }
        }
        if (exitLoop) { break; }
    }
    if (data.length === 0) { return notFound() }

    return (
        <Section>
            <>
                <h1>{catName}</h1>
                <ErrorBoundary FallbackComponent={FallbackFetch}>
                    <PostList data={data} />
                </ErrorBoundary>
            </>
        </Section>
    );
}

// Return a list of `params` to populate the [slug] dynamic segment
export async function generateStaticParams({ params }: { params: Promise<{ category: string }> }) {
    const filter = (await params).category;
    const { data } = await fetchByCategory(filter);
    if (data.length === 0) { return notFound() };
    console.log(data);

    return data.map((category: strapiCategories) => ({
        slug: category.slug,
    }))
}