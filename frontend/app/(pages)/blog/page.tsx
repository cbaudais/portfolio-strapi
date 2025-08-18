import { FallbackFetch } from "@/components/ErrorFallback";
import { Section } from "@/components/Section";
import PostList from "@/components/PostList";
import { ErrorBoundary } from "react-error-boundary";
import { Metadata } from "next";
import { fetchAPI } from "@/utils/fetch-api";

export const metadata: Metadata = {
  title: "Blog | Portfolio",
  description: "Blog",
};

export default async function Blog() {
  try {
    const query = '/posts';
    const urlParamsObject = {
      filters: {
        categories: {
          name: "Blog"
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

  return (
    <Section>
      <>
        <h1>Blog</h1>
        <ErrorBoundary FallbackComponent={FallbackFetch}>
          {/* <PostList query={query} urlParamsObject={params} options={options} /> */}
        </ErrorBoundary>
      </>
    </Section>
  )
}