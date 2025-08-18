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
        const response = await fetchAPI(
            path,
            urlParamsObject,
        );
        return response;
    } catch (error) {
        console.log(error);
    }
}

async function getMetaData(slug: string) {
    const token = process.env.STRAPI_API_TOKEN;
    const path = `/projects`;
    const urlParamsObject = {
        filters: { slug },
    };
    const options = { headers: { Authorization: `Bearer ${token}` } };
    const response = await fetchAPI(
        path,
        urlParamsObject,
    );
    return response.data;
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const meta = await getMetaData((await params).slug);
    const metadata = meta[0];

    return {
        title: metadata.title + " | Portfolio",
        description: "Portfolio " + metadata.title + "project.",
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
    const path = `/projects`;
    const projectResponse = await fetchAPI(
        path,
        {
            populate: ['categories'],
        },
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