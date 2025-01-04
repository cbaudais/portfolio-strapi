// 'use client'
// // import { FallbackFetch } from "@/components/ErrorFallback";
// import { Section } from "@/components/Section";
// import PostList from "@/components/PostList";
// // import { ErrorBoundary } from "react-error-boundary";

// export default function Blog() {
//   const token = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN;
//   const options = { headers: { Authorization: `Bearer ${token}` } };
//   const path = '/posts';
//   const params = {
//     // filters: {
//     //   categories: {
//     //     name: "Blog"
//     //   },
//     // },
//     populate: {
//     //   categories: {
//     //     fields: ["id", "name"]
//     //   },
//       // thumbnail: { populate: "*" },
//       thumbnail: {
//         fields: ["url"]
//       }
//     },
//   };
//   return (
//     <Section>
//       <>
//         <h1 className="">Blog</h1>
//         {/* <ErrorBoundary FallbackComponent={FallbackFetch}> */}
//           <PostList query={path} urlParamsObject={params} options={options} />
//         {/* </ErrorBoundary> */}
//       </>
//     </Section>
//   )
// }