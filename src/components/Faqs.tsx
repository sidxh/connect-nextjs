'use client'

import React, { useRef, useState } from 'react';
import Link from 'next/link';

const faqs = [
  {
    id: 1,
    header: 'What is ConnectLNM?',
    text: 'ConnectLNM is a platform designed to bridge the gap between current students and alumni of our university. It allows students to seek guidance and support from alumni who have expertise in various domains, helping them connect and learn from experienced professionals.',
  },
  {
    id: 2,
    header: 'How can ConnectLNM benefit me?',
    text: 'ConnectLNM provides you with a directory of alumni and seniors who have expertise in different domains such as technology, marketing, design, and more. You can reach out to them for guidance, mentorship, and assistance in your academic and professional journey.',
  },
  {
    id: 3,
    header: 'How do I search for mentors on ConnectLNM?',
    text: (
      <span>
        You can easily search for mentors on ConnectLNM by heading to the{' '}
        <Link className='text-[#a5bff0]' href="/explore">Explore</Link> section and entering the specific skill or domain you need help with. We will provide you with a list of alumni and seniors who possess expertise in that particular area, along with their contact information for further communication.
      </span>
    ),
  },
  {
    id: 4,
    header: 'How do I contact a mentor on ConnectLNM?',
    text: 'ConnectLNM provides you with the contact information, such as Email Addresses and LinkedIn handles, of the mentors listed on the platform. You can use this information to reach out to them directly and initiate a conversation regarding your specific query or request for guidance.',
  },
  {
    id: 5,
    header: 'Is ConnectLNM only for technical skills?',
    text: (
        <span>
          No, ConnectLNM caters to a wide range of skills and domains. While it includes technical skills like programming, web development, and data science, it also encompasses non-technical skills such as marketing, design, content writing, and more. The platform aims to connect students with mentors across diverse fields. We are open to {' '}
          <Link className='text-[#a5bff0]' href="/reach-out">suggestions</Link> for listing new domains as well.
        </span>
      ),
  },

  {
    id: 6,
    header: 'Why are some skills listed but do not have much data?',
    text: `We are working on expanding and scaling our database which is currently facing some non-technical issues. Hopefully we'll get it resolved ASAP. Meanwhile you can check all of other domains that we have to offer!`,
  },

  {
    id: 7,
    header: 'How can I contribute to ConnectLNM?',
    text: 'Absolutely! If you are an alumni or senior or anyone from the fraternity with expertise in a particular field, we encourage you to contribute to ConnectLNM. All you have to do is head to the "Get Listed!" section and fill out a small form specifying to us your skills and relevant experience. You can give back to the community by sharing your knowledge, providing guidance, and supporting the current students in their academic and professional endeavors.',
  },
  {
    id: 8,
    header: 'I have encountered an issue or need assistance with ConnectLNM. How can I get support?',
    text: (
        <span>
          If you are facing any issues, have suggestions to provide or require assistance with ConnectLNM, please reach out to our support team. You can contact the developers through the provided support channels, given on the {' '}
          <Link className='text-[#a5bff0]' href="/reach-out">Meet The Developers</Link> section. We are here to help and ensure a smooth experience for all users.
        </span>
      ),
  },
];

const AccordionItem = (props: any) => {
  const contentEl = useRef();
  const { handleToggle, active, faq } = props;
  const { header, id, text } = faq;

  return (
    <div className="border-[1px] border-[#ddd] rounded-[5px] mb-[10px] overflow-hidden last:mb-0">
      <div className="">
        <div className={`rc-accordion-toggle flex justify-between items-start cursor-pointer p-3 ${active === id ? 'active' : ''}`} onClick={() => handleToggle(id)}>
          <h5 className="rc-accordion-title font-bold text-[1rem] relative mb-0 text-[#b3ceee] p-2">{header}</h5>
          <i className="fa fa-chevron-down relative top-[2px] text-white text-[12px] rc-accordion-icon"></i>
        </div>
      </div>
      <div
        ref={contentEl}
        className={`rc-collapse ${active === id ? 'show' : ''}`}
        style={active === id ? { height: contentEl.current.scrollHeight } : { height: '0px' }}
      >
        <div className="m-[2rem] leading-[24px]">
          <p className="mb-0">{text}</p>
        </div>
      </div>
    </div>
  );
};

const DetailSidebar = () => {
  const [active, setActive] = useState(null);

  const handleToggle = (index: any) => {
    if (active === index) {
      setActive(null);
    } else {
      setActive(index);
    }
  };

  return (
    <>
      <div className="container-fluid mt-5 mb-5 max-w-[1200px] flex mx-auto">
        <div className="row justify-content-center">
          <div className="col-md-8 mt-2">
            <div className="text-[1rem] overflow-hidden mx-[1rem] my-[6rem]">
              <div className="card-body">
                <h4 className="my-[4rem] mx-0 mt-[1rem] text-[2rem] text-white">Frequently Asked Questions [FAQs]</h4>
                {faqs.map((faq) => (
                  <AccordionItem key={faq.id} active={active} handleToggle={handleToggle} faq={faq} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailSidebar;
