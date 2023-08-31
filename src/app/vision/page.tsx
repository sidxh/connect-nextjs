import React from 'react'
import Image from 'next/image'
import Mentor2 from '../../../public/mentor2.png'
import Mentorship from '../../../public/mentorship.png'
import Faqs from '@/components/Faqs'

export default function Vision() {
  return (
    <div className="mx-8 my-auto py-5 text-center max-w-[1400px] text-white">
            <h1 className='text-[3rem] mb-2rem font-bold'>Why ConnectLNM?</h1>
            <div className="flex justify-around items-center mx-[5rem] my-[5rem]">
                <p className='p-[2rem] text-[1.1rem] bg-slate-9000 rounded-[2rem] box'>🚨At our university, we&apos;ve noticed a gap between juniors and seniors/alumni in terms of expertise and guidance in different fields. There are many students who want to seek help in various domains, but they often don&apos;t know who to reach out to. On the other hand, there are many seniors and alumni who have valuable experience and knowledge in these fields, but they don&apos;t always have an easy way to connect with students who need their help. That&apos;s why we created ConnectLNM. Our platform serves as an online directory of experts within our university, providing an easy and user-friendly way for juniors to find seniors and alumni with the specific skills and expertise they need.</p>
                <Image src={Mentorship} alt='' className='h-[18rem] ml-[2rem] max-w-[500px]' />
            </div>
            <div className="flex justify-around items-center mx-[5rem] my-0">
                <Image src={Mentor2} alt='' className='h-[18rem] ml-[2rem] max-w-[500px]' />
                <p className='p-[2rem] text-[1.1rem] bg-slate-9000 rounded-[2rem] box'>By simply searching for a particular domain or skill, students can find a list of experts and their contact information, making it easy to reach out and get the guidance and support they need. We believe that ConnectLNM has the potential to transform the way that students and alumni connect and collaborate within our university. By bridging the gap between juniors and seniors/alumni, we can create a more cohesive and supportive community that fosters learning and growth for all.✔️</p>
            </div>
            <Faqs />
        </div>
  )
}