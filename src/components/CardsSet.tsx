// components/CardSet.tsx

'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import axios from 'axios';
import NoData from '../../public/no-data.png';
import { useParams } from 'next/navigation'; // Change the import statement
import Cards from './Cards';

const Loader = () => (
  <div className="fixed w-full h-full flex justify-center items-center left-0 top-0">
    <svg className="pl" viewBox="0 0 128 128" width="128px" height="128px" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="pl-grad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="hsl(193, 90%, 55%)" />
          <stop offset="100%" stop-color="hsl(223, 90%, 55%)" />
        </linearGradient>
      </defs>
      <circle className="pl__ring" r="56" cx="64" cy="64" fill="none" stroke="hsla(0, 10%, 10%, 0.1)" stroke-width="16" stroke-linecap="round" />
      <path className="pl__worm" d="M92,15.492S78.194,4.967,66.743,16.887c-17.231,17.938-28.26,96.974-28.26,96.974L119.85,59.892l-99-31.588,57.528,89.832L97.8,19.349,13.636,88.51l89.012,16.015S81.908,38.332,66.1,22.337C50.114,6.156,36,15.492,36,15.492a56,56,0,1,0,56,0Z" fill="none" stroke="url(#pl-grad)" stroke-width="16" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="44 1111" stroke-dashoffset="10" />
    </svg>
  </div>
);

interface YourType {
  // Define the type structure of your objects here
  category: string;
  skill: string;
  name: string;
  skillset: string;
  experience: string;
  achievement: string;
  rollno: string;
  linkedin: string;
  email: string;
}

const formatSkillName = (skillName: string) => {
  return skillName
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
};

const CardsSet = () => {
  const { category, skill } = useParams();
  console.log('URL Params - Category:', category, 'Skill:', skill); // Log URL parameters

  const [data, setData] = useState<YourType[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (typeof category === 'string') {
          const response = await axios.get<YourType[]>(`https://connectlnm-backend.onrender.com/${category}`)
          console.log('API Response Data:', response.data); // Log data received from the API
          setData(response.data);
        }
        setIsLoading(false);
      } catch (error) {
        console.error('API Request Error:', error); // Log any error from the API request
      }
      setIsLoading(false);
    };

    fetchData();
  }, [category]);

  const specificData = data
    .filter((skillData) => typeof skillData === 'object')
    .filter(
      (skillData) =>
        typeof skillData.category === 'string' &&
        typeof category === 'string' &&
        skillData.category.toLowerCase() === category.toLowerCase() &&
        skillData.skill.toLowerCase() === (skill as string).toLowerCase()
    ) as YourType[];

  console.log('Filtered Specific Data:', specificData); // Log the filtered specific data

  if (isLoading) {
    return <Loader />;
  }

  if (specificData.length === 0) {
    return (
      <div className='not-found'>
        <Image alt='' src={NoData} />
        <div className='not-found-text'>
          <h1>No Data Yet</h1>
          <p>
            We are working on expanding and scaling our database which is currently facing some non-technical issues.
            Hopefully, we&apos;ll get it resolved ASAP. Meanwhile, you can check all of the other domains!
          </p>
        </div>
      </div>
    );
  }

  const firstSkill = specificData[0];

  return (
    <div className='text-center mb-[3rem] mx-0'>
      <h1 className='text-[2rem] font-bold mb-[3rem]'>{formatSkillName(firstSkill.skill)}</h1>
      <div className='grid grid-cols-3 gap-[2rem] w-[70vw] p-[2rem]'>
        {specificData.map((specificData, index) => (
          <Cards
            key={index}
            name={specificData.name}
            skill={formatSkillName(firstSkill.skill)}
            skillset={specificData.skillset}
            experience={specificData.experience}
            achievement={specificData.achievement}
            rollno={specificData.rollno}
            linkedin={specificData.linkedin}
            email={specificData.email}
          />
        ))}
      </div>
    </div>
  );
};

export default CardsSet;
