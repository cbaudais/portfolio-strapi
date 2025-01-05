'use client'
import { getStrapiMedia } from "@/utils/fetch-api";
import useFetch from "../utils/useFetch";
import { BlocksRenderer } from '@strapi/blocks-react-renderer';
import type { strapiProjects } from "@/types/types";
import ReactMarkdown from "react-markdown";
import { IconCaretRightFilled } from "@tabler/icons-react";
import Link from "next/link";
import Loader from "./Loader";

export default function PostList ({
    query: query,
    urlParamsObject: urlParamsObject,
    options: options
}: {
    query: string;
    urlParamsObject?: {};
    options?: {};
}) {
    const { isLoading, data } = useFetch(query, urlParamsObject, options);
    const projects = data;
    if (isLoading) return <Loader/>
    if (data.data == 0) return <p>Coming soon...</p>

    return (
        <>
            <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-8">
                {projects.data.map((project: strapiProjects) => {
                    const imageUrl = getStrapiMedia(
                        project.thumbnail?.url
                    )
                
                    return (
                        // <div>
                        <div key={project.documentId} className="bg-white rounded-xl overflow-hidden drop-shadow-md flex flex-col">
                            <Link href={`/${query}/${project.slug}`} >
                                <img className="h-52 max-h-52 w-full object-cover" src={`${imageUrl}`} />
                            </Link>
                            <div className="px-6 pt-4">
                                <Link href={`/${query}/${project.slug}`} >
                                    <h2 className="font-heading">{project.title}</h2>
                                </Link>
                                <div className="-ml-1">
                                    {project.categories.map((category) => (
                                        <p className="tag select-none" key={category.id}>{category.name}</p>
                                    ))}
                                </div>
                                {(project.descPreview) // if true or !null, else false or null
                                    ? <ReactMarkdown className="markdown text-grey">{project.descPreview}</ReactMarkdown> 
                                    : <div className="text-grey my-4">
                                        <BlocksRenderer content={project.description.slice(0, 1)}/>
                                    </div>}
                                {/* <div className="text-grey my-4">
                                    <BlocksRenderer content={project.description.slice(0, 1)}></BlocksRenderer>
                                </div> */}
                            </div>
                            <div className="mt-auto px-6">
                                <Link href={`/blog/${project.slug}`} className="py-2 px-4 mt-2 mb-4 btn-dark space-x-1 rounded-lg flex w-fit">
                                    <p>See more </p>
                                    <IconCaretRightFilled size={18} viewBox="0 0 24 15" />
                                </Link>
                            </div>
                        </div>
                        // </div>
                    );
                })}
            </div>
        </>
    )
}