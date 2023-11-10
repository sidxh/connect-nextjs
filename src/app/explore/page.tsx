import Domains from '@/components/Domains'
import React from 'react'
import Image from 'next/image'
import LNM from '../../../public/lnm.jpg'
import WebTech from './[category]/webtech'

export default function Explore() {
  return (<>
          <Image
          src={LNM}
          alt=""
          className="mt-[3rem] bg-[#949494] rounded-[5rem] w-[1200px] h-[35rem] mx-auto"
        />
        <div className="bg-[#ffffff] h-[3.5rem] w-[50%] rounded-[1rem] absolute top-[95%] left-[25%]">
          {" "}
        </div>
        <Domains />
  </>)
}
