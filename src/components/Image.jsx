import React from 'react'
import { IKImage } from 'imagekitio-react';


const Image = ({src, className, w, h}) => {
  return (
    <IKImage urlEndpoint={import.meta.env.VITE_IMAGEKIT_URL_ENDPOINT} 
            //path='/logo.png'
            //src='https://ik.imagekit.io/0abkwfwjx/logo.png' 
            path={src}
            className={className} 
            loading='lazy'
            lqip={{ active: true, quality: 20}}
            alt=''
            width={w}
            height={h}
            />
  )
}

export default Image