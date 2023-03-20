import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'
import 'remixicon/fonts/remixicon.css'
import dynamic from "next/dynamic";
const ReactPlayer = dynamic(() => import("react-player/lazy"), { ssr: false });
import { useState } from 'react'
import Navbar from '../components/Navbar.js'
import axios from 'axios'
import supabase from '../components/Supabase.js'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const [shown, setShown] = useState(false)
  const [registerPop, setRegisterPop] = useState(false)


  return (
    <>
      <div className="bg-black min-h-screen flex text-white">
        <Navbar />
        <div className="w-[100%] relative text">
          <div className="absolute top-0 left-0 w-full h-full bg-cover bg-center" style={{ backgroundImage: `url('/bgimage.jpg')` }}></div>
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-black to-transparent"></div>
          <div className="z-10 relative">
            <div className='pt-[10%] select-none'>
              <h1 className="fontspex text-[81px]">Spex Music</h1>
              <h2 className="fontspex text-[22px]">Explore the latest and greatest in electronic music with our<br />curated playlist of cutting-edge tracks and emerging artists.</h2>
              <div className='pt-3'>
                <Link href="/music" className='bg-white text-black text-[22px] rounded-md p-3 m-2'>Get Started</Link>
                <button className='text-white border border-2 text-[22px] rounded-md p-3 m-2' onClick={()=>{
                  setRegisterPop(!registerPop)
                }}>News Signup</button>
              </div>
              {/* <ReactPlayer url="https://soundcloud.com/arwv/vcro-achill3s-hard-to-tell-you"/> */}

            </div>
          </div>
        </div>




        <div className='absolute bottom-0 right-0'>
          <p className='text-[10px]'>Created By <a href='https://maxwoollons.com'>Max Woollons</a></p>
        </div>
        {/* Register Right Side popup */}
        {registerPop && <RegisterPopup setRegisterPop={setRegisterPop} registerPop={registerPop} />}



      </div>


    </>
  )
}




function RegisterPopup(props) {
    
    const [email, setEmail] = useState('')
    const [tac, setTac] = useState(false)
 

    function closePop() {
        props.setRegisterPop(!props.registerPop)
    }

    function registerUser(e) {
        e.preventDefault()
        if (tac) {  
          if (email === '') {
            alert('Please enter an email')
            return
          } else {
            //check if email is valid
            if (!email.includes('@')) {
              alert('Please enter a valid email')
              return
            } else {
              //check if email is already in db
              supabase.from('news_emails').select('*').eq('email', email).then((data)=>{
                if (data.data.length > 0) {
                  alert('You have been added to the mailing list')
                  closePop()
                  return
                } else {
                  supabase.from('news_emails').insert([
                    {email: email}
                  ]).then((data)=>{
                    console.log(data)
                    alert('You have been added to the mailing list')
                    closePop()
                  }).catch((err)=>{
                    console.log(err)
                    alert('There was an error adding you to the mailing list')
                  })
                }
              }).catch((err)=>{
                console.log(err)
              })


              
    

              
            }
          }
          //enter email into mailing list db news_emails
        
          
        } else {
            alert('Please accept the terms and conditions')
        }

    }




  return (
    <div className='absolute top-0 right-0 w-[100%] h-[100%] bg-black bg-opacity-50 z-50 text-black'>
      <div className='w-[100%] h-[100%] flex justify-center items-center'>
        <div className='bg-white max-w-[50%]  rounded-md p-5'>
          <div className='flex justify-end'>
            <button className='text-black text-[30px] p-2' onClick={() => props.setRegisterPop(!props.registerPop)}>X</button>
          </div>
         
          <div className='grid md:grid-cols-2'>
            <div className='hidden md:flex flex text-center justify-center items-center'>
              <img className=' w-[50%] pb-5' src="blacklogo.png" alt="" />

            </div>
          <div className='flex justify-center items-center'>
            <form className='flex flex-col'>
              <h1 className='text-[30px]'>Get the latest updates 🎉</h1>
          
             


              <input className='border-2 border-black rounded-md p-2 m-2' type='email' placeholder='Email' onChange={(e)=>{
                  setEmail(e.target.value)
              }}/>
              <div className='flex justify-around'>Accept the terms and conditions<input onChange={(e)=>{
                  setTac(e.target.checked)
              }} type={'checkbox'} /></div>
              
              <button className='bg-black text-white rounded-md p-2 m-2' onClick={registerUser}>Sign Up</button>
            </form>
          </div>
            
          </div>
          
         
       
        </div>
      </div>
    </div>
  )
}