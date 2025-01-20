import React, { useState } from 'react'
import PostList from '../components/PostList'
import SideMenu from '../components/SideMenu'
const PostListPage = () => {

  const [open,setOpen] = useState(false);
  return (
    <div className=''>
      <h1 className='mb-8 text-2xl'>Development</h1>
      <button onClick={() => setOpen((prev) => !prev)} className='bg-blue-800 text-sm text-white px-2 py-2 rounded-2xl mb-4 md:hidden'>
        {open ? "Close" : "Filter or Search"}
      </button>
      <div className='flex flex-col gap-8'>
        <div className=''>
          <PostList />
        </div>
        <div className=''>
          <SideMenu />
        </div>
      </div>
    </div>
    
  )
}

export default PostListPage