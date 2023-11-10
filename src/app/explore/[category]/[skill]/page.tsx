import React from 'react';
import DetailedSidebar from '@/components/DetailedSidebar';
import CardsSet from '@/components/CardsSet';
import SkillLayout from './layout';

const SkillPage = () => {
  return (
      <div className='flex justify-around mb-[10rem]'>
        <DetailedSidebar />
        <CardsSet />
      </div>
  );
};

export default SkillPage;

