import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'
import 'remixicon/fonts/remixicon.css'
import dynamic from "next/dynamic";
const ReactPlayer = dynamic(() => import("react-player/lazy"), { ssr: false });
import { useState } from 'react'
import Navbar from '@/components/navbar'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const [shown, setShown] = useState(false)


  return (
    <>
      <div className="bg-black min-h-screen flex text-white">
      <Navbar/>
        <div className="w-[100%] relative text">
          <div className="absolute top-0 left-0 w-full h-full bg-cover bg-center" style={{ backgroundImage: `url('/bgimage.jpg')` }}></div>
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-black to-transparent"></div>
          <div className="z-10 relative">
            <div className='pt-[10%] select-none'>
              <h1 className="fontspex text-[81px]">Spex Music</h1>
              <h2 className="fontspex text-[22px]">Explore the latest and greatest in electronic music with our<br />curated playlist of cutting-edge tracks and emerging artists.</h2>
              <div className='pt-3'>
                <Link href="/music" className='bg-white text-black text-[22px] rounded-md p-3 m-2'>Get Started</Link>
                <button className='text-white border border-2 text-[22px] rounded-md p-3 m-2'>Learn More </button>
              </div>
              {/* <ReactPlayer url="https://soundcloud.com/arwv/vcro-achill3s-hard-to-tell-you"/> */}

            </div>
          </div>
        </div>




        <div className='absolute bottom-0 right-0'>
          <p className='text-[10px]'>Created By <a href='https://maxwoollons.com'>Max Woollons</a></p>
        </div>
      </div>


    </>
  )
}
