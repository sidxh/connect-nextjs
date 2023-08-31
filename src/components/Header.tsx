import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import NameHead from '../../public/name-head.png'
import GetListed from '../../public/get_listed.png'

export default function Header() {
  return (
    <div>
      <header>
        <nav className='mx-[2%] my-0 mb-[4rem] py-8 flex justify-start items-center text-white text-[1.2rem] gap-14'>
            <Link className='ml-[5rem] my-0 mr-auto' href='/'><Image alt='' src={NameHead} className='w-52' /></Link>
            <Link className='' href='/vision'>Vision</Link>
            <Link className='' href='/explore'>Explore</Link>
            <Link className='' href='/opportunities'>Opportunities</Link>
            <Link className='mr-auto' href='/reach-out'>Reachout</Link>
            <Link className='mr-[5rem] w-48' href='/reach-out'><Image alt='' src={GetListed} className='' /></Link>
        </nav>
      </header>
    </div>
  )
}
