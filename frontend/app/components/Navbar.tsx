'use client';
import { useEffect, useState } from "react";
import { IconMenu2, IconX } from "@tabler/icons-react";
import Footer from "./Footer";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { strapiProjects } from "@/types/types";
import useFetch from "@/utils/useFetch";

useState;
useEffect;

const Navbar = () => {
  const sideIcons = "p-2 hover:text-berry-60 transition-all duration-300 ease-in-out";
  const [sidebarOpen, setIsSidebarOpen] = useState<boolean>(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsSidebarOpen(false); // Close the navigation panel
  }, [pathname]);

  // const date = new Date();
  // const year = date.getFullYear();
  // const {data} = useFetch('/categories')
  // const categories = data;

  return (
    <header>
      <div className={`sidebar ${sidebarOpen ? ("translate-x-0 shadow-2xl lg:shadow-none") : ("translate-x-[-290px] lg:translate-x-0")} p-4 bg-white text-zinc-950`}>
        <div className="flex flex-col h-full overflow-y-auto scroll">
          <Link href="/" className="flex items-center flex-wrap px-2 py-4 gap-3">
            <img alt="logo" src="/favicon.ico" className="max-h-9 rounded-full border-solid border-[1px] border-berry-80" />
            <h1 className="font-bold font-heading text-nowrap m-0 mt-[1px]">Christina Baudais</h1>
          </Link>
          <nav id="menu">
          <ul className="flex flex-col gap-8 lg:gap-5 m-4 ml-0 text-xl font-heading">
              <Link href="/" className={`nav-link ${pathname === '/' ? 'active' : ''}`}>Home</Link>
              <Link href="/2d-work" className={`nav-link ${pathname === '/2d-work' ? 'active' : ''}`}>2D Work</Link>
              <Link href="/3d-work" className={`nav-link ${pathname === '/3d-work' ? 'active' : ''}`}>3D Work</Link>
              <Link href="/games" className={`nav-link ${pathname === '/games' ? 'active' : ''}`}>Games</Link>
              {/* {categories.data.map((category:strapiCategories) => (
                <Link key={category.id} href={`/${encodeURIComponent(category.)}`}>
                  {category.name}
                </Link>
              ))} */}
              <Link href="/about" className={`nav-link ${pathname === '/about' ? 'active' : ''}`}>About</Link>
              <Link href="/blog" className={`nav-link ${pathname === '/blog' ? 'active' : ''}`}>Blog</Link>
            </ul>
          </nav>
          <p className="m-4">cbwbaudais@outlook.com</p>
          <div className="flex items-center mt-2 mb-8">
            <a href="/assets/BaudaisChristinaResume.pdf" target="_blank" className={`${sideIcons}`}>
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-file-cv"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M14 3v4a1 1 0 0 0 1 1h4" /><path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" /><path d="M11 12.5a1.5 1.5 0 0 0 -3 0v3a1.5 1.5 0 0 0 3 0" /><path d="M13 11l1.5 6l1.5 -6" /></svg>
            </a>
            <a href="https://www.instagram.com/wildyartsy/" target="_blank" className={`${sideIcons}`}>
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-brand-instagram"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M4 8a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z" /><path d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" /><path d="M16.5 7.5v.01" /></svg>
            </a>
            <a href="https://www.linkedin.com/in/christinabaudais/" target="_blank" className={`${sideIcons}`}>
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-brand-linkedin"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" /><path d="M8 11l0 5" /><path d="M8 8l0 .01" /><path d="M12 16l0 -5" /><path d="M16 16v-3a2 2 0 0 0 -4 0" /></svg>
            </a>
          </div>
          <div className='mt-auto hidden lg:block'>
            <Footer />
          </div>
        </div>
      </div>
      <button
        className={`rounded-full p-2 absolute top-7 right-7 lg:hidden z-50 transition-all duration-300 text-white shadow-lg shadow-zinc-500 ${sidebarOpen ? ("bg-berry-20") : ("bg-berry-60")}`}
        onClick={() => setIsSidebarOpen(!sidebarOpen)}
      >
        {sidebarOpen ? (
          <IconX />
        ) : (
          <IconMenu2 />
        )}
      </button>
    </header>
  );
};

export default Navbar;
