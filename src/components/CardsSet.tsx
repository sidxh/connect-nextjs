// components/CardSet.tsx

'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import axios from 'axios';
import NoData from '../../public/no-data.png';
import { useParams } from 'next/navigation'; // Change the import statement
import Cards from './Cards';

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

    // Render loading UI
    if (isLoading) {
      return <div>Loading...</div>; // Replace with your loading UI
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
      <h1 className='text-[2rem] font-bold mb-[3rem]'>{firstSkill.skill}</h1>
      <div className='grid grid-cols-3 gap-[2rem] w-[70vw] p-[2rem]'>
        {specificData.map((specificData, index) => (
          <Cards
            key={index}
            name={specificData.name}
            skill={specificData.skill}
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
