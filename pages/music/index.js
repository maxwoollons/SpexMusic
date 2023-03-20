import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'
import 'remixicon/fonts/remixicon.css'
import dynamic from "next/dynamic";
const ReactPlayer = dynamic(() => import("react-player/lazy"), { ssr: false });
import { useState } from 'react'
import Navbar from '/components/navbar'



const index = () => {
  return (
    <>
<div className="bg-black min-h-screen flex text-white">
  <Navbar/>
      
        <div className="w-[100%] relative text">
          <div className="absolute top-0 left-0 w-full h-full bg-cover bg-center" style={{ backgroundImage: `url('/bgimage.jpg')` }}></div>
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-black to-transparent"></div>
          <div className="z-10 relative">
          <div className='select-none'>
<h1 className="fontspex text-[81px]">Our Music</h1>
<div className='bg-orange-600 p-3 m-3 rounded-full'>
<i className="ri-soundcloud-fill p-3"></i>
<span className='text-xl'>Sound Cloud</span>

</div>
<div className='flex justify-around flex-wrap'>
  <ReactPlayer width='30%' className="min-w-[200px] p-2 m-2" url="https://soundcloud.com/arwv/vcro-achill3s-hard-to-tell-you" />
  <ReactPlayer width='30%' className="min-w-[200px] p-2 m-2" url="https://soundcloud.com/arwv/vcro-achill3s-hard-to-tell-you" />
  <ReactPlayer width='30%' className="min-w-[200px] p-2 m-2" url="https://soundcloud.com/arwv/vcro-achill3s-hard-to-tell-you" />
  <ReactPlayer width='30%' className="min-w-[200px] p-2 m-2" url="https://soundcloud.com/arwv/vcro-achill3s-hard-to-tell-you" />
  <ReactPlayer width='30%' className="min-w-[200px] p-2 m-2" url="https://soundcloud.com/arwv/vcro-achill3s-hard-to-tell-you" />
  <ReactPlayer width='30%' className="min-w-[200px] p-2 m-2" url="https://soundcloud.com/arwv/vcro-achill3s-hard-to-tell-you" />




 


  
</div>




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

export default index




