import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import NameHead from '../../public/name-head.png'
import GetListed from '../../public/get_listed.png'
import { CheckSquare2 } from 'lucide-react';

export default function Header() {
  return (
    <div>
      <header>
        <nav className='mx-[2%] my-0 mb-[4rem] py-8 flex justify-start items-center text-white sm:text-[1.1rem] text-[0.75rem] sm:gap-14 gap-6'>
            <Link className='sm:ml-[5rem] ml-0 my-0 mr-auto' href='/'><Image alt='' src={NameHead} className='sm:w-52 w-[80%]' /></Link>
            <Link className='' href='/vision'>Vision</Link>
            <Link className='' href='/explore'>Explore</Link>
            <Link className='sm:block hidden' href='/opportunities'>Opportunities</Link>
            <Link className='mr-auto' href='/reach-out'>Reachout</Link>
            <button className='mr-[5rem] w-48 px-2 py-4 rounded-lg bg-blue-200 font-bold text-black sm:block hidden'><Link href='/reach-out'>Get Listed</Link></button>
        </nav>
      </header>
    </div>
  )
}
