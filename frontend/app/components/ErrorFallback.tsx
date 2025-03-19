// import placeholder from "@/assets/placeholder1024.png"
'use client'

// import Link from "next/link";
// import { usePathname } from "next/navigation";

export function FallbackFetch({ error }: any) {
    // Call resetErrorBoundary() to reset the error boundary and retry the render.
    return (
        <div role="alert">
            <p>Something went wrong:</p>
            <pre style={{ color: "red", whiteSpace: "pre-wrap" }}>{error.message}</pre>
        </div>
    );
}

// export function FallbackNav() {
//     const pathname = usePathname();
//     return (
//         <>
//             <li className="nav-link">
//                 <Link href="/2d-work" className={`${pathname === '/2d-work' ? 'active' : ''}`}>2D Work</Link>
//             </li>
//             <li className="nav-link">
//                 <Link href="/3d-work" className={`${pathname === '/3d-work' ? 'active' : ''}`}>3D Work</Link>
//             </li>
//             <li className="nav-link">
//                 <Link href="/games" className={`${pathname === '/games' ? 'active' : ''}`}>Games</Link>
//             </li>
//         </>
//     )
// }