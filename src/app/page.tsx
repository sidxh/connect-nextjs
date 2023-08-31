'use client'
import React, { useCallback } from 'react';
// import Particles from "react-particles";
// import { loadFull } from "tsparticles";
// import particlesOptions from "./particles.json";
import Link from 'next/link';
import Image from 'next/image';
import Logos from '../../public/logos.png'

export default function Home() {
  const particlesInit = useCallback(main => {
    loadFull(main);
}, [])
    return (
      <div className="absolute top-0 left-0 w-full h-full landing">
            {/* <Particles className='particles-hai' options={particlesOptions} init={particlesInit}/> */}
            <div className='flex flex-col mx-[22vw] my-[28vh] p-[2rem]'>
              <div className='flex items-center'>
                <Image alt='' src={Logos} className='w-[11rem]' />
            {/* <img className="logos" src={require('../logos.png')} alt='' /> */}
          <div className="flex flex-col text-white">
              <h1 className='main-text-h1 font-semibold text-[96px]'>ConnectLNM</h1>
              <p className='ml-[3%] text-[#949494] text-[25px]' id="landing-p-desk">Upskill By Harnessing the Power of Community!</p>
        </div>
    </div>
    <p className="hidden">Upskill By Harnessing the Power of Community!</p>
    </div>
    <Link id="landing-btn" href="/vision">Get Started</Link>         
      </div>
  )
}