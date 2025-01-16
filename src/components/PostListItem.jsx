import React from 'react'
import Image from './Image'
import { Link } from 'react-router-dom'

const PostListItem = () => {
  return (
    <div className='flex flex-col xl:flex-row gap-8'>
        { /* Image */}
        <div className='md:hidden xl:block xl:w-1/3'>
            <Image src="postImg.jpeg" className="rounded-2xl object-cover" />
        </div>
        {/* Details */}
        <div className='flex flex-col gap-4 xl:w-2/3'>
            <Link to="/test" className='text-4xl font-semibold'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum, 
            cupiditate necessitatibus!
            </Link>
            <div className='flex items-center gap-2 text-gray-400'>
                <span>Written by</span>
                <Link className='text-blue-800'>John Doe</Link>

                <span>on</span>
                <Link className='text-blue-800'>Web Design</Link>

                <span>2 Days ago</span>
            </div>
            <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                 Eos in tempora non illum asperiores, laudantium aliquam, 
                 minus nisi harum nostrum quia velit odit iste dolor quo 
                 adipisci quisquam et nesciunt.
            </p>
            <Link to="/test" className='underline text-blue-800 text-sm'>Read More</Link>
        </div>
    </div>
  )
}

export default PostListItem