import { strapiProjects } from '@/types/types';
import { getStrapiMedia } from '@/utils/fetch-api';
// import { postRenderer } from '@/utils/post-renderer';
// import { BlocksRenderer } from '@strapi/blocks-react-renderer';
import Image from 'next/image';
import ReactMarkdown from 'react-markdown';

interface slugFetchedPost {
    data: strapiProjects[];
}

export default function Post({
    data
}: {
    data: slugFetchedPost
}) {

    function LinkRenderer(props: any) {
        return (
            <a href={props.href} target="_blank" rel="noreferrer">
                {props.children}
            </a>
        );
    }
    const { title, description, publishedAt, thumbnail } = data.data[0];
    const imageUrl = getStrapiMedia(thumbnail?.url);

    return (
        <article className="mt-8 space-y-8">
            <h1 className="leading-tight text-5xl font-bold mt-8">{title}</h1>
            {imageUrl && (
                <Image
                    src={imageUrl}
                    alt="article thumbnail image"
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="w-1/2 object-cover rounded-lg"
                />
            )}
            <ReactMarkdown className="markdown text-grey" components={{ a: LinkRenderer }}>{description}</ReactMarkdown>
            {/* {data.attributes.blocks.map((section: any, index: number) => postRenderer(section, index))} */}
        </article >
    );
}