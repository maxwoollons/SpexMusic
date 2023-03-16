import React from 'react'
import Link from 'next/link'
import 'remixicon/fonts/remixicon.css'
import { useState } from 'react'



const Navbar = () => {
const [shown, setShown] = useState(false)

  return (
    <div>
          <div className='w-[100px] transition-all hover:w-[300px]' onMouseEnter={() => setShown(true)} onMouseLeave={() => setShown(false)}>
          <Link href='/' className='flex justify-center pt-3'>
            <img src="White_Spex_Logo_Tranparent.png" alt="Logo" className='min-w-[50px] max-w-[50px] pt-4' />

          </Link>
          <div className='flex flex-col items-center justify-center pt-3'>
            <Link href="/music" className='p-3'>
              <i class="ri-headphone-line text-3xl"></i>
                <span className={`text-xl p-2 transition-all delay-800 ${shown ? 'opacity-100 hover:underline' : 'opacity-0 fixed'}`}>
                  Music
                </span>
            </Link>
            <Link href="/music" className='p-3'>
              <i class="ri-file-warning-line text-3xl"></i>
                <span className={`text-xl p-2 transition-all delay-800 ${shown ? 'opacity-100 hover:underline' : 'opacity-0 fixed'}`}>
                  Account
                </span>



            </Link>
            <Link href="/music" className='p-3 transition-all'>
              <i class="ri-contacts-line text-3xl transition-all"></i>
                <span className={`text-xl p-2 transition-all delay-800 ${shown ? 'transition-all delay-800 opacity-100 hover:underline' : 'opacity-0 fixed'}`}>
                  Artists
                </span>



            </Link>


          </div>

        </div>

    </div>
  )
}

export default Navbar