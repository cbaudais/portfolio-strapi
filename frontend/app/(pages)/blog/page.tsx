import { FallbackFetch } from "@/components/ErrorFallback";
import { Section } from "@/components/Section";
import PostList from "@/components/PostList";
import { ErrorBoundary } from "react-error-boundary";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | Portfolio",
  description: "Christina Baudais's Blog",
};

export default function Blog() {
  try {
    const token = process.env.STRAPI_API_TOKEN;
    const options = { headers: { Authorization: `Bearer ${token}` } };
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