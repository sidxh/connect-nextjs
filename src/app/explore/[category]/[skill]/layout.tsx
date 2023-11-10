import React from 'react'
import Image from 'next/image'
import Header from '@/components/Header'

export default function SkillLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <section className='max-w-[1400px] text-center mx-auto'>
        {children}
      </section>
    )
  }
