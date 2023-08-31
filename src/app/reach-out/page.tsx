import React from 'react'
import DevCards from '@/components/DevCards'

export default function ReachOut() {
    return(
        <div className="mx-[4rem] my-[8rem] px-[5rem] text-center flex flex-col">
        <h1 className='text-[3rem] mb-[5rem] font-bold'>Meet The Developers</h1>
        <div className="flex justify-around">
            <DevCards name="Siddhant Shitole" skill="UI Designer & Full-Stack Developer" descp="as a user interface designer, a full-stack developer, and a technical writer, Siddhant possesses a high proficiency in the MERN Stack, C++, and, most notably, GUI development having a high familiarity with various auxiliary frontend frameworks. Siddhant's core passion lies in demystifying technical subjects and crafting compelling digital experiences for the people of the internet." linkedin="https://www.linkedin.com/in/siddhantxh/" github="https://github.com/sidxh" />
            
            <DevCards name="Divya Bajaj" skill="AI/ML & Backend Developer" descp="an AI/ML developer experienced in NLP, backend (Node & FastAPI), data cleaning, sentiment analysis, neural networks, data science, Python, C++, DSA, and data analysis. Driven by a relentless pursuit of innovation, Divya Bajaj consistently delivers impactful results, pushing boundaries in the field of AI/ML and leveraging their diverse skill set for cutting-edge solutions." linkedin="https://www.linkedin.com/in/divya-bajaj-b64663170/" github="https://github.com/bajajdivya"/>
        </div>
        </div> 
    )
}