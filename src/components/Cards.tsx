import React, { useState } from 'react';

const Cards = (props:any) => {
  const [activeTab, setActiveTab] = useState('experience');

  const handleTabChange = (tab:any) => {
    setActiveTab(tab);
  };

  const trimText = (text: string | undefined, maxLength: number) => {
    if (!text) return ''; // Return an empty string if text is undefined or null
    return text.length > maxLength ? text.substring(0, maxLength) + '...' : text;
  };

  return (
    <div className="rounded-[2rem] flex flex-col justify-around text-[#ecfee8] hover:scale-[1.05] cards_component">
      <h1 className='text-[1.5rem] mt-[2rem] text-center'>{props.name}</h1>
      <p className='text-[1rem] mb-[2rem] mt-[0.75rem] text-center text-[#cbdff8]'>{props.skill}</p>
      <div className="flex justify-around [&>*]:text-[1rem] ">
        <button
          className={`tab bg-[#94949400] text-white border-b-0 border-l-0 border-r-0 ${activeTab === 'experience' ? 'active' : ''}`}
          onClick={() => handleTabChange('experience')}
        >
          Experience
        </button>
        <button
          className={`tab bg-[#94949400] text-white border-b-0 border-l-0 border-r-0 ${activeTab === 'contact' ? 'active' : ''}`}
          onClick={() => handleTabChange('contact')}
        >
          Contact
        </button>
      </div>
      <div className="">
        {activeTab === 'experience' && (
          <div>
            <ul className='list-none my-[1.5rem] mx-[1rem] text-left'>
              <li className='text-blue-200 text-lg font-bold my-4'>Technical Skillset</li>
              <span className='text-[0.85rem]'><button className='text-black py-1 px-2 rounded-full border border-black bg-white'>{trimText(props.skillset, 30)}</button></span> {/* Change the trim size as needed */}
              <li className='text-blue-200 text-lg font-bold my-4'>Experience</li>
              <span className='text-[0.85rem]'><button className='text-black py-1 px-2 rounded-full border border-black bg-white'>{trimText(props.experience, 55)}</button></span> {/* Change the trim size as needed */}
              <li className='text-blue-200 text-lg font-bold my-4'>Achievements</li>
              <span className='text-[0.85rem]'><button className='text-black py-1 px-2 rounded-full border border-black bg-white'>{trimText(props.achievement, 55)}</button></span> {/* Change the trim size as needed */}
            </ul>
          </div>
        )}
        {activeTab === 'contact' && (
          <div className='my-[1rem] mx-0'>
            <ul className='list-none my-[1.5rem] mx-[1rem] text-left'>
              <li className='text-blue-200 text-lg font-bold my-4'>Roll Number</li>
              <span className='text-[0.85rem]'><button className='text-black py-1 px-2 rounded-full border border-black bg-white'>{props.rollno}</button></span>
              <li className='text-blue-200 text-lg font-bold my-4'>LinkedIn Handle</li>
              <span className='text-[0.85rem]'><a className='text-black py-2 px-3 rounded-full border border-black bg-white' href={props.linkedin} target='_blank' rel="noreferrer">LinkedIn</a></span>
              <li className='text-blue-200 text-lg font-bold my-4'>Email ID</li>
              <span className='text-[0.85rem]'><a className='text-black py-2 px-3 rounded-full border border-black bg-white' href={props.email} target='_blank' rel="noreferrer">Email ID</a></span>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cards;
