import { FallbackFetch } from "@/components/ErrorFallback";
import { Section } from "@/components/Section";
import PostList from "@/components/PostList";
import { ErrorBoundary } from "react-error-boundary";

export default function TwoDWork() {
  const token = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN;
  const options = { headers: { Authorization: `Bearer ${token}` } };
  const path = '/projects';
  const params = {
    filters: {
      categories: {
        name: "2D Work"
      },
    },
    populate: {
      categories: {
        fields: ["id", "name", "slug"]
      },
      // thumbnail: { populate: "*" },
      thumbnail: {
        fields: ["url"]
      }
    },
  };
  return (
    <Section>
      <>
        <h1>2D Work</h1>
        <ErrorBoundary FallbackComponent={FallbackFetch}>
          <PostList query={path} urlParamsObject={params} options={options} />
        </ErrorBoundary>
      </>
    </Section>
  )
}