'use client';
import { useEffect, useState } from "react";
import { IconBrandInstagram, IconBrandLinkedin, IconFileCv, IconMenu2, IconX } from "@tabler/icons-react";
import Footer from "./Footer";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { strapiCategories } from "@/types/types";
import Loader from "./Loader";
import { fetchAPI } from "@/utils/fetch-api";
import { ErrorBoundary } from "react-error-boundary";
import { FallbackNav } from "./ErrorFallback";

useState;
useEffect;

const Navbar = ({
  query: query,
  urlParamsObject: urlParamsObject,
  options: options
}: {
  query: string;
  urlParamsObject?: {};
  options?: {};
}) => {
  const sideIcons = "p-2 hover:text-berry-60 transition-all duration-300 ease-in-out";
  const [sidebarOpen, setIsSidebarOpen] = useState<boolean>(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsSidebarOpen(false); // Close the navigation panel
  }, [pathname]);

  const [categories, setData] = useState<any>([]);
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const responseData = await fetchAPI(query, urlParamsObject, options);
        setData(responseData);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [query, urlParamsObject, options]);
  if (isLoading) return <Loader />
  if (categories.data == 0) return <p>Nothing here yet...</p>

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
              <li className="nav-link">
                <Link href="/" className={`${pathname === '/' && 'active'}`}>Home</Link>
              </li>
              <ErrorBoundary FallbackComponent={FallbackNav}>
                {categories.data.map((category: strapiCategories) => {
                  return (
                    <li key={category.id} className="nav-link">
                      <Link href={`${encodeURIComponent(category.slug)}`} className={`${query === category.slug && 'active'}`}>
                        {category.name}
                      </Link>
                    </li>
                  )
                })}
              </ErrorBoundary>
              <li className="nav-link">
                <Link href="/about" className={`${pathname === '/about' && 'active'}`}>About</Link>
              </li>
              <li className="nav-link">
                <Link href="/blog" className={`${pathname === '/blog' && 'active'}`}>Blog</Link>
              </li>
            </ul>
          </nav>
          <p className="m-4">cbwbaudais@outlook.com</p>
          <div className="flex items-center mt-2 mb-8">
            <a href="/assets/BaudaisChristinaResume.pdf" target="_blank" className={`${sideIcons}`}>
              <IconFileCv size={32} />
            </a>
            <a href="https://www.instagram.com/wildyartsy/" target="_blank" className={`${sideIcons}`}>
              <IconBrandInstagram size={32} />
            </a>
            <a href="https://www.linkedin.com/in/christinabaudais/" target="_blank" className={`${sideIcons}`}>
              <IconBrandLinkedin size={32} />
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
