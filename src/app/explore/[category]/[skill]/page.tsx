import React from 'react'
import DetailedSidebar from '@/components/DetailedSidebar'
import CardsSet from '@/components/CardsSet'

export default function SkillsPage() {
  return (
    <div className='flex justify-around mb-[10rem]'>
        <DetailedSidebar />
        <CardsSet />
    </div>
  )
}
