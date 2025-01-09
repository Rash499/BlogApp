import React, { useState } from 'react'
import { IKImage } from 'imagekitio-react';

const Navbar = () => {

    const [open, setOpen] = useState(false);

  return (

    <div className='w-full h-16 md:h-20 flex items-center justify-between'>
        {/*Logo*/}
        <div className='flex items-center gap-4 text-2xl font-bold'>
            <IKImage urlEndpoint={import.meta.env.VITE_IMAGEKIT_URL_ENDPOINT} 
            //path='/logo.png'
            src='https://ik.imagekit.io/0abkwfwjx/logo.png' 
            className='w-8 h-8' 
            alt=''/>
            <span>Blog logo</span>
        </div>
        {/*Mobile Menu*/}
        <div className='md:hidden'>
            {/*Mobile Button*/}
            <div className='cursor-pointer text-4xl'
            onClick={() => setOpen((prev) => !prev)}
            >
                {open ? "X" : "≡"}
            </div>

            {/*Mobile LinkedList*/}
            <div className={`w-full h-screen flex flex-col items-center justify-center gap-8 font-medium text-lg absolute top-16 transition-all ease-in-out
                 ${open ? "-right-0" : "-right-[100%]"}` }>
                Menu
                <a href="http://">Home</a>
                <a href="http://">Trending</a>
                <a href="http://">Most popular</a>
                <a href="http://">About</a>
                <a href=''>
                    <button className='py-2 px-4 rounded-3xl bg-blue-800 text-white'>Login</button>
                </a>
            </div>
        </div>
        {/*Desktop Menu*/}
        <div className='hidden md:flex items-center gap-8 xl:gap-12 font-medium'>
            <a href="http://">Home</a>
            <a href="http://">Trending</a>
            <a href="http://">Most popular</a>
            <a href="http://">About</a>
            <a href=''>
                <button className='py-2 px-4 rounded-3xl bg-blue-800 text-white'>Login</button>
            </a>
        </div>
    </div>
  )
}

export default Navbar