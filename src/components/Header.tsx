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
        <nav className='mx-[2%] my-0 mb-[4rem] py-8 flex justify-start items-center text-white text-[1.1rem] gap-14'>
            <Link className='ml-[5rem] my-0 mr-auto' href='/'><Image alt='' src={NameHead} className='w-52' /></Link>
            <Link className='' href='/vision'>Vision</Link>
            <Link className='' href='/explore'>Explore</Link>
            <Link className='' href='/opportunities'>Opportunities</Link>
            <Link className='mr-auto' href='/reach-out'>Reachout</Link>
            <button className='mr-[5rem] w-48 px-2 py-4 rounded-lg bg-blue-200 font-bold text-black'><Link href='/reach-out'>Get Listed</Link></button>
        </nav>
      </header>
    </div>
  )
}
