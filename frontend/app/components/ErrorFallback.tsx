// import placeholder from "@/assets/placeholder1024.png"
'use client'

export function FallbackFetch({ error }: any) {
    // Call resetErrorBoundary() to reset the error boundary and retry the render.
    if ((error.message.includes("read")) && (error.message.includes("map"))) {
        return (
            <div role="alert">
                <p>Something went wrong:</p>
                <pre style={{ color: "red" }}>
                    {error.message}
                    <br />
                    Fetch request error.
                </pre>
            </div>
        )
    }
    return (
        <div role="alert">
            <p>Something went wrong:</p>
            <pre style={{ color: "red" }}>{error.message}</pre>
        </div>
    );
}

// export function FallbackImg({ error }: any) {
//     return (
//         <img className="w-full object-cover" src={placeholder} />
//     )
// }