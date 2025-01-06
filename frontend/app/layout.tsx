import type { Metadata } from "next";
import "./globals.css"
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { ErrorBoundary } from "react-error-boundary";
import { FallbackFetch } from "./components/ErrorFallback";

export const metadata: Metadata = {
  title: "Christina Baudais | Portfolio",
  description: "Christina Baudais's Multimedia Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const token = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN;
  const options = { headers: { Authorization: `Bearer ${token}` } };
  const query = '/categories';
  const urlParamsObject = {
      sort: {name: "asc"}
  }
  return (
    <html lang="en">
      <body>
        <ErrorBoundary FallbackComponent={FallbackFetch}>
          <Navbar query={query} urlParamsObject={urlParamsObject} options={options}/>
        </ErrorBoundary>
        <main className="app lg:ml-[290px] min-h-full">
          {children}
        </main>
        <div id='footer' className='lg:hidden'>
          <Footer />
      </div>
      </body>
    </html>
  );
}
