import React from 'react'
import Image from 'next/image'
import Error404 from '../../../public/error404.png'

export default function Opportunities() {
  return (
    <div className='flex justify-center pt-[2rem]'>
      <Image src={Error404} alt='' />
    </div>
  )
}