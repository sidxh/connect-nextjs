'use client'
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import axios from 'axios';
import NoData from '../../public/no-data.png';
import { useRouter } from 'next/router';
import Cards from './Cards';

const CardsSet = () => {
  const router = useRouter();
  const { category, skill } = router.query;

  console.log('Category:', category);
  console.log('Skill:', skill);

  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://connectlnm-backend.onrender.com/${category}`);
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
      }
    };
  
    fetchData();
  }, [category]);

  const specificData = data.filter(
    (skillData) =>
      typeof skillData.category === 'string' &&
      typeof category === 'string' &&
      skillData.category.toLowerCase() === category.toLowerCase() &&
      skillData.skill.toLowerCase() === skill.toLowerCase()
  );

  if (specificData.length === 0) {
    return (
      <div className='not-found'>
        <Image alt='' src={NoData} />
        <div className='not-found-text'>
          <h1>No Data Yet</h1>
          <p>
            We are working on expanding and scaling our database which is currently facing some non-technical issues.
            Hopefully we&apos;ll get it resolved ASAP. Meanwhile, you can check all of other domains!
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
