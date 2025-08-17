import { FallbackFetch } from "@/components/ErrorFallback";
import { Section } from "@/components/Section";
import PostList from "@/components/PostList";
import { ErrorBoundary } from "react-error-boundary";
import { fetchAPI } from "@/utils/fetch-api";
import { strapiCategories } from "@/types/types";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import { Suspense } from "react";
import Loading from "@/components/Loader";

//fetch posts, filtered by categories
async function fetchByCategory(filter: string) {
    try {
        const query = '/projects';
        const urlParamsObject = {
            sort: "createdAt:DESC",
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
        const responseData = await fetchAPI(
            query,
            urlParamsObject,
        );
        return responseData;
    } catch (error) {
        console.log(error);
    }
}

export async function generateMetadata({ params }: { params: Promise<{ category: string }> }): Promise<Metadata> {
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
    return {
        title: catName + " | Christina Baudais",
        description: "Christina Baudais's " + catName,
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
                <ErrorBoundary FallbackComponent={FallbackFetch}>
                    <Suspense key={filter} fallback={<Loading />}>
                        <PageHeader heading={catName} />
                        <PostList data={data} />
                    </Suspense>
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

    return data.map((category: strapiCategories) => ({
        slug: category.slug,
    }))
}