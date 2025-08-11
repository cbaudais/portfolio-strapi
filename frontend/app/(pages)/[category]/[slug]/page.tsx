import { Section } from "@/components/Section";
import Post from "@/components/Post";
import { fetchAPI } from "@/utils/fetch-api";
import type { Metadata } from 'next';
import { FallbackFetch } from "@/components/ErrorFallback";
import { ErrorBoundary } from "react-error-boundary";
import { Suspense } from "react";
import Loading from "@/components/Loader";

async function getPostBySlug(slug: string) {
    try {
        const token = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN;
        const path = `/projects`;
        const urlParamsObject = {
            filters: { slug },
            populate: {
                categories: {
                    fields: ["name"]
                },
                thumbnail: {
                    fields: ["url"]
                }
            },
        };
        const options = { headers: { Authorization: `Bearer ${token}` } };
        const response = await fetchAPI(path, urlParamsObject, options);
        return response;
    } catch (error) {
        console.log(error);
    }
}

async function getMetaData(slug: string) {
    const token = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN;
    const path = `/projects`;
    const urlParamsObject = {
        filters: { slug },
    };
    const options = { headers: { Authorization: `Bearer ${token}` } };
    const response = await fetchAPI(path, urlParamsObject, options);
    return response.data;
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const meta = await getMetaData((await params).slug);
    const metadata = meta[0];

    return {
        title: metadata.title + " | Christina Baudais",
        description: "Christina Baudais's " + metadata.title + "project.",
    };
}

export default async function PostRoute({ params }: { params: Promise<{ slug: string }> }) {
    const slug = (await params).slug;
    const data = await getPostBySlug(slug);
    if (data.length === 0) return <h2>no post found</h2>;
    return (
        <Section>
            <>
                <ErrorBoundary FallbackComponent={FallbackFetch}>
                    <Suspense key={slug} fallback={<Loading />}>
                        <Post data={data} />
                    </Suspense>
                </ErrorBoundary>
            </>
        </Section>
    );
}

export async function generateStaticParams() {
    const token = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN;
    const path = `/projects`;
    const options = { headers: { Authorization: `Bearer ${token}` } };
    const projectResponse = await fetchAPI(
        path,
        {
            populate: ['categories'],
        },
        options
    );

    return projectResponse.data.map(
        (project: {
            slug: string;
            categories: {
                slug: string;
            };
        }) => ({ slug: project.slug, categories: project.slug })
    );
}