type PageHeaderProps = {
    heading: string,
    text?: string,
    textClass?: string,
}

export default function PageHeader({ heading, text, textClass }: PageHeaderProps) {
    return (
        <>
            <h1>{heading}</h1>
            {text && <p className={textClass}>{text}</p>}
        </>
    )
}