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
          className="mt-[3rem] bg-[#949494] rounded-[5rem] sm:w-[1200px] sm:h-[35rem] h-[20rem] mx-auto"
        />
        <div className="bg-[#ffffff] h-[3.5rem] w-[50%] rounded-[1rem] absolute sm:top-[95%] top-[65%] left-[25%]">
          {" "}
        </div>
        <Domains />
  </>)
}
