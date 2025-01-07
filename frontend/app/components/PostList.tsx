'use client'
import { fetchAPI, getStrapiMedia } from "@/utils/fetch-api";
// import useFetch from "../utils/useFetch";
import { useState, useEffect } from "react";
import { BlocksRenderer } from '@strapi/blocks-react-renderer';
import type { strapiCategories, strapiProjects } from "@/types/types";
import ReactMarkdown from "react-markdown";
import { IconCaretRightFilled } from "@tabler/icons-react";
import Link from "next/link";
import Loader from "./Loader";
// import Image from "next/image";

const PostList = ({
    // query: query,
    // urlParamsObject: urlParamsObject,
    // options: options
    data: data
}: {
    // query: string;
    // urlParamsObject?: {};
    // options?: {};
    data: strapiProjects[];
}) => {
    // const [data, setData] = useState<any>([]);
    // const [isLoading, setLoading] = useState(true);
    // useEffect(() => {
    //     const fetchData = async () => {
    //         setLoading(true);
    //         try {
    //             const responseData = await fetchAPI(query, urlParamsObject, options);
    //             setData(responseData);
    //         } catch (error) {
    //             console.error(error);
    //         } finally {
    //             setLoading(false);
    //         }
    //     };
    //     fetchData();
    // }, [query, urlParamsObject, options]);
    // if (isLoading) return <Loader />
    if (data.length === 0) return <p>Nothing here yet...</p>

    return (
        <>
            <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-8">
                {data.map((project: strapiProjects) => {
                    const imageUrl = getStrapiMedia(
                        project.thumbnail?.url
                    )
                    const category = project.categories[0].slug

                    return (
                        // <div>
                        <div key={project.documentId} className="bg-white rounded-xl overflow-hidden drop-shadow-md flex flex-col">
                            <Link href={`/${category}/${project.slug}`} >
                                <img className="h-52 max-h-52 w-full object-cover" src={`${imageUrl}`} />
                                {/* {imageUrl && (
                                    <div className="w-full h-52 max-h-52">
                                        <Image
                                        alt="thumbnail"
                                        fill
                                        objectFit="cover"
                                        // width={100}
                                        // height={100}
                                        className="object-cover w-full h-52 max-h-52"
                                        src={imageUrl}
                                        />
                                    </div>
                                )} */}
                            </Link>
                            <div className="px-6 pt-4">
                                <Link href={`/${category}/${project.slug}`} >
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
                                        <BlocksRenderer content={project.description.slice(0, 1)} />
                                    </div>}
                            </div>
                            <div className="mt-auto px-6">
                                <Link href={`/${category}/${project.slug}`} className="py-2 px-4 mt-2 mb-4 btn-dark space-x-1 rounded-lg flex w-fit">
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

export default PostList;