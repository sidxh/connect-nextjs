import React from 'react'
import Link from 'next/link'

export default function Domains() {
  return (
    <div className='my-[10rem] mb-0'>
        <nav className='mx-auto my-0 mb-[4rem] py-8 flex justify-center items-center text-white text-[1.2rem] gap-14'>
            <Link className='' href='/explore/web-tech'>Web Technologies</Link>
            <Link className='' href='/explore/nontech'>Non-Technical</Link>
            <Link className='' href='/explore/core'>Core Domains</Link>
            <Link className='' href='/explore/media'>Media & Design</Link>
            <Link className='' href='/explore/misc'>Miscellaneous</Link>
        </nav>
    </div>
  )
}
