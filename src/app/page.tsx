// 'use client'
import React, { useCallback } from 'react';
// import Particles from "react-particles";
// import { loadFull } from "tsparticles";
// import particlesOptions from "./particles.json";
import Link from 'next/link';
import Image from 'next/image';
import Logos from '../../public/logos.png'

export default function Home() {
//   const particlesInit = useCallback(main => {
//     loadFull(main);
// }, [])
    return (
      <div className="absolute top-0 left-0 landing w-[100vw] sm:w-full ">
            {/* <Particles className='particles-hai' options={particlesOptions} init={particlesInit}/> */}
            <div className='flex flex-col mx-[10vw] sm:mx-[22vw] my-[45vh] sm:my-[28vh] sm:p-[2rem] items-center '>
              <div className='flex items-center'>
                <Image alt='' src={Logos} className='w-[3rem] sm:w-[11rem]' />
            {/* <img className="logos" src={require('../logos.png')} alt='' /> */}
          <div className="flex flex-col text-white">
              <h1 className='main-text-h1 font-semibold sm:text-[96px] sm:block text-[36px]'>ConnectLNM</h1>
              <p className='ml-[3%] text-[#949494] text-[25px] sm:block hidden' id="landing-p-desk">Upskill By Harnessing the Power of Community!</p>
        </div>
    </div>
    <p className="sm:hidden text-[0.7rem] text-[#949494]">Upskill By Harnessing the Power of Community!</p>
    </div>
    <Link id="landing-btn" href="/vision">Get Started</Link>         
      </div>
  )
}