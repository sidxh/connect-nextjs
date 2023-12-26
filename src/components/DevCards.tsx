import React from 'react'
import Image from 'next/image'
import User2 from '../../public/user2.png'
import ConnectLinkedin from '../../public/conect-linkedin.png'
import ConnectGithub from '../../public/conect-github.png'

const DevCards = (props: any) => {
  return (
      <div className="bg-[#121516] pb-[3rem] rounded-[2rem] sm:w-[35%] w-full h-auto max-w-[450px] dev_cont">
                <Image src={User2} alt='' className='mx-auto my-[2.5rem] w-[50%]' />
                <h1 className='text-[2rem] font-bold'>{props.name}</h1>
                <h2 className='mx-0 my-0 mt-[1rem] text-[1.3rem] font-medium text-[#949494]'>{props.skill}</h2>
                <p className='p-[2rem] text-[0.95rem] text-[#def4fe] '>{props.descp}</p>
                <div className="flex justify-around mx-[2rem] gap-[3rem] items-center">
                    <button className='rounded-[1rem]'>
                        <a className='flex items-center px-[1rem] py-[0.5rem] justify-around text-[0.5rem] font-bold bg-[#fff] rounded-[1rem] text-[#121516]' href={props.linkedin} target="_blank" rel='noreferrer'>
                            <div>
                                <Image src={ConnectLinkedin} alt='' className='w-[2rem] mr-2' />
                            </div>
                        <h1 className='text-[1rem]'>LinkedIn</h1>
                        </a>
                    </button>
                    <button className='rounded-[1rem]'>
                        <a className='flex items-center px-[1rem] py-[0.5rem] justify-around text-[0.5rem] font-bold bg-[#fff] rounded-[1rem] text-[#121516]' href={props.github} target="_blank" rel='noreferrer'>
                            <div>
                                <Image src={ConnectGithub} alt='' className='w-[2rem] mr-2' />
                            </div>
                        <h1 className='text-[1rem]'>Github</h1></a>
                    </button>
                </div>

            </div>
  )
}

export default DevCards
