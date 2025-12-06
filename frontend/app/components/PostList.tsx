'use client'
import { getStrapiMedia } from "@/utils/fetch-api";
import type { strapiProjects } from "@/types/types";
import ReactMarkdown from "react-markdown";
import { IconCaretRightFilled } from "@tabler/icons-react";
import Link from "next/link";
import Image from "next/image"

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
    function LinkRenderer(props: any) {
        return (
            <a href={props.href} target="_blank" rel="noreferrer">
                {props.children}
            </a>
        );
    }
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
                        <div key={project.documentId} className="bg-white rounded-xl overflow-hidden drop-shadow-md flex flex-col">
                            <Link href={`/${category}/${project.slug}`} >
                                {imageUrl && (
                                    // <div className="w-full h-52 max-h-52">
                                    <Image
                                        alt="thumbnail"
                                        // fill
                                        className="object-cover w-full"
                                        width={0}
                                        height={0}
                                        sizes="50vw"
                                        src={imageUrl}
                                    />
                                    // </div>
                                )}
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
                                <ReactMarkdown className="markdown text-grey" components={{ a: LinkRenderer }}>{project.excerpt}</ReactMarkdown>
                            </div>
                            <div className="mt-auto px-6">
                                <Link href={`/${category}/${project.slug}`} className="py-2 px-3 mt-2 mb-4 space-x-1 flex w-fit btn-dark rounded-md">
                                    <p>See more </p>
                                    <IconCaretRightFilled size={18} viewBox="0 0 24 15" />
                                </Link>
                            </div>
                        </div>
                    );
                })}
            </div>
        </>
    )
}

export default PostList;