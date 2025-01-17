import React from 'react'
import Image from '../components/Image'
import { Link } from 'react-router-dom'

const SinglePostPage = () => {
  return (
    <div className='flex flex-col gap-8'>
      {/*detail*/}
      <div className='flex gap-8'>

        <div className='lg:w-3/5 flex flex-col gap-8'>

          <h1 className='text-xl md:text-3xl xl:text-4xl 2xl:text-5xl font-semibold'>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</h1>

          <div className='flex items-center gap-2 text-gray-400 text-sm'>
            <span>Written by</span>
            <Link className='text-blue-800'>John Doe</Link>
            <span>on</span>
            <Link className='text-blue-800'>Web Design</Link>
            <span>2 days ago</span>

          </div>

          <p className='text-gray-500 font-medium' >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Ipsam alias fuga omnis iure quidem amet distinctio repudiandae
            assumenda maiores porro laborum corporis vel, inventore eius natus 
            suscipit architecto ratione nostrum!
          </p>
  
        </div>

        <div className='hidden lg:block w-2/5'>
          <Image src='postImg.jpeg' w='600' className='rounded-2xl' />
        </div>
      </div>
       {/*content*/}
       <div className=''></div>
    </div>
  )
}

export default SinglePostPage