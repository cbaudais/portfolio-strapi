import { FallbackFetch } from "@/components/ErrorFallback";
import { Section } from "@/components/Section";
import PostList from "@/components/PostList";
import { ErrorBoundary } from "react-error-boundary";
import { fetchAPI } from "@/utils/fetch-api";
import { strapiCategories } from "@/types/types";

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

export async function generateStaticParams() {
    return [];
}