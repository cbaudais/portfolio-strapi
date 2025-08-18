import type { Metadata } from "next";
import "./globals.css"
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { Suspense } from "react";
import Loader from "./components/Loader";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Portfolio Site",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="app relative lg:ml-[250px] min-h-full">
          <Suspense fallback={<Loader />}>
            {children}
          </Suspense>
        </main>
        <div id='footer' className='lg:hidden'>
          <Footer />
        </div>
      </body>
    </html >
  );
}
