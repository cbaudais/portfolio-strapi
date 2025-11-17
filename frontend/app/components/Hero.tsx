'use client' // for particles
import { IconArrowBigRightLinesFilled, IconPlayerPlayFilled } from "@tabler/icons-react";
import Link from "next/link";
import Particle from "./Particle";
import Image from "next/image"

const Hero = () => {
  return (
    <div className="relative bg-radial-gradient from-[#f6f4eb] via-[#91c8e4] to-[#749bc2]">
      {/* bg-radial-gradient from-zinc-50 via-sky-400 to-violet-900 */}
      {/* bg-radial-gradient from-sky-100 via-sky-400 to-indigo-700 */}
      <div className="absolute"><Particle /></div>
      <div className="w-11/12 mx-auto py-24 h-screen">
        <div className='grid-cols-1 grid md:grid-cols-[60%,auto] gap-12 items-center'>
          <div className=''>
            <h1 className='text-3xl lg:text-3xl font-bold'>
              Hello! This is a <span className='text-amber-500'>PORTFOLIO</span> site built to showcase the most beautiful work!
            </h1>
            <p className='mt-7 text-xl font-semibold'>
              I referenced different tutorials from older versions of Strapi and Next.js, with documentation for API calls in Strapi 5, to create this portfolio site. Take a look around!
            </p>
            <div className='mt-8 flex-col space-y-6 md:space-y-0 md:flex md:flex-row items-center gap-6 flex-wrap'>
              <Link href="/about" className='px-8 py-4 btn-dark flex items-center space-x-2 rounded-md w-fit z-10'>
                <p className='text-nowrap text-lg font-bold uppercase'>Read More</p>
                <IconArrowBigRightLinesFilled />
              </Link>
              <Link href="#" className='flex items-center space-x-3 w-fit z-10'>
                <div className='p-4 text-white hover:bg-amber-600 transition-all duration-200 bg-amber-500 rounded-full'>
                  <IconPlayerPlayFilled />
                </div>
                <p className='text-nowrap text-lg font-semibold'>Watch Demo Reel</p>
              </Link>
            </div>
          </div>
          <div className="z-10 max-w-[350px] hidden md:grid overflow-hidden mx-auto items-center aspect-square">
            <Image
              src="/swirl.png"
              alt="colourful graphic swirl"
              width={600}
              height={600}
              className="object-cover min-w-full min-h-full h-full"
            />
          </div>
        </div>
      </div>
    </div >
  )
}

export default Hero