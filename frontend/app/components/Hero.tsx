'use client' // for particles
import { IconArrowBigRightLinesFilled, IconPlayerPlayFilled } from "@tabler/icons-react";
import { Section } from "./Section";
import Link from "next/link";
import Particle from "./Particle";

const Hero = () => {
  return (
    <div className="relative">
      <div className="absolute"><Particle /></div>
      <div className="w-11/12 mx-auto py-16">
        {/* bg-radial-gradient from-zinc-50 via-sky-400 to-violet-900 */}
        {/* <div className='py-16 bg-[url("/images/banner.jpg")] bg-cover bg-center'> */}
        <>
          <div className='grid-cols-1 grid md:grid-cols-[60%,auto] gap-12 items-center'>
            <div className=''>
              <h1 className='text-2xl lg:text-3xl font-bold'>
                Hello! I'm <span className='text-amber-500'>Christina Baudais</span>, a multimedia artist, designer, and web developer.
              </h1>
              <p className='mt-7 text-lg'>
                I love to create designs, illustrations, websites, and game art. I have an eye for art and experience in 2D Illustrations, 3D Modelling, Web Developement, Graphic Design, Game Developement, and more!
              </p>
              <div className='mt-8 flex-col space-y-6 md:space-y-0 md:flex md:flex-row items-center gap-6 flex-wrap'>
                <Link href="/about" className='px-8 py-4 btn-dark flex items-center space-x-2 rounded-md w-fit z-10'>
                  <p className='text-nowrap text-lg font-bold uppercase'>Read More</p>
                  <IconArrowBigRightLinesFilled />
                </Link>
                {/* <Link href="/" className='flex items-center space-x-3 w-fit'>
                <div className='p-4 text-white hover:bg-yellow-500 transition-all duration-200 bg-amber-500 rounded-full'>
                  <IconPlayerPlayFilled />
                </div>
                <p className='text-nowrap text-lg font-semibold text-black-100'>Watch Demo Reel</p>
              </Link> */}
              </div>
            </div>
            <div className='max-w-[350px] hidden overflow-hidden md:grid items-center rounded-full aspect-square mx-auto z-10'>
              <img src="/moiii.jpg" alt="user" className='object-cover w-full h-full' />
            </div>
          </div>
        </>
      </div>
    </div>
  )
}

export default Hero