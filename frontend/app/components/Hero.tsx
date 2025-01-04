import { IconArrowBigRightLinesFilled, IconPlayerPlayFilled } from "@tabler/icons-react";
import { Section } from "./Section";
import Link from "next/link";
// import Particle from "./Particle";

const Hero = () => {
  return (
    <Section>
      {/* <div className='py-16 bg-[url("/images/banner.jpg")] bg-cover bg-center'> */}
      {/* <Particle /> */}
      <div className='grid-cols-1 grid md:grid-cols-[60%,auto] gap-12 items-center'>
        <div className='text-black-100'>
          <h1 className='text-2xl lg:text-3xl font-bold'>
            Hello! I'm <span className='text-dark'>Christina Baudais</span>, a multimedia artist and designer.
          </h1>
          <p className='mt-7 text-lg'>
            I love to create art assets and illustrations for games. I have experience in 2D Illustrations, 3D Modelling, Game Developement & Design, and more!
          </p>
          <div className='mt-8 flex-col space-y-6 md:space-y-0 md:flex md:flex-row items-center gap-6 flex-wrap'>
            <Link href="/about" className='px-8 py-4 hover:bg-grey transition-all duration-200 bg-dark text-white flex items-center space-x-2 rounded-md w-fit'>
              <p className='text-nowrap text-lg font-bold uppercase'>Read More</p>
              <IconArrowBigRightLinesFilled />
            </Link>
            <Link href="/" className='flex items-center space-x-3 w-fit'>
              <div className='p-4 text-white hover:bg-berry-20 transition-all duration-200 bg-berry-60 rounded-full'>
                <IconPlayerPlayFilled />
              </div>
              <p className='text-nowrap text-lg font-semibold text-black-100'>Watch Demo Reel</p>
            </Link>
          </div>
        </div>
        <div className='max-w-[350px] hidden overflow-hidden md:grid items-center rounded-full aspect-square mx-auto'>
          <img src="/moiii.jpg" alt="user" className='object-cover w-full h-full' />
        </div>
      </div>
    </Section>
  )
}

export default Hero