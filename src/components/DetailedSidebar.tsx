'use client'
import React, { useRef, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

import FrontendDevelopment from '../../public/domains/frontend-development.png'
import BackendDevelopment from '../../public/domains/backend-development.png'
import AIML from '../../public/domains/ai-ml.png'
import QuantumComputing from '../../public/domains/quantum-computing.png'
import BlockchainDevelopment from '../../public/domains/blockchain-development.png'
import ARVR from '../../public/domains/ar-vr.png'
import CloudComputing from '../../public/domains/cloud-computing.png'
import DataScience from '../../public/domains/data-science.png'
import DevOps from '../../public/domains/devops.png'
import CyberSecurity from '../../public/domains/cyber-security.png'
import TechnicalWriting from '../../public/domains/technical-writing.png'
import GameDevelopment from '../../public/domains/game-development.png'
import ApplicationDevelopment from '../../public/domains/application-development.png'

import Sales from '../../public/domains/sales.png'
import BusinessAssociate from '../../public/domains/business-associate.png'
import CopyWriting from '../../public/domains/copy-writing.png'
import SocialMediaManagement from '../../public/domains/social-media-management.png'
import CommunityManagement from '../../public/domains/community-management.png'
import DigitalMarketing from '../../public/domains/digital-marketing.png'
import GraphicsDesigning from '../../public/domains/graphic-designing.png'
import InfluencerMarketing from '../../public/domains/influencer-marketing.png'

import ThreeDPrinting from '../../public/domains/3d-printing.png'
import Welding from '../../public/domains/welding.png'
import MetalForming from '../../public/domains/metal-forming.png'
import MechanicalDeisgn from '../../public/domains/mechanical-design.png'
import MachineOperations from '../../public/domains/machine-operations.png'
import RoboticsAutomation from '../../public/domains/robotics-automation.png'
import Mechatronics from '../../public/domains/mechatronics.png'
import SystemEngineering from '../../public/domains/system-engineering.png'
import EmbededSystems from '../../public/domains/embedded-systems.png'
import DigitalSignalProcessing from '../../public/domains/digital-signal-processing.png'
import MicrocontrollerProgramming from '../../public/domains/microcontroller-programming.png'
import PCBDesigning from '../../public/domains/pcb-designing.png'
import FGPAProgramming from '../../public/domains/fgpa-programming.png'
import InternetOfThings from '../../public/domains/internet-of-things.png'
import AnalogDigitalElectronics from '../../public/domains/analog-digital-electronics.png'

import UIUXDesigning from '../../public/domains/ui-ux.png'
import ProductDesigning from '../../public/domains/product-designing.png'
import FilmMaking from '../../public/domains/film-making.png'
import Photography from '../../public/domains/photography.png'
import VFX from '../../public/domains/vfx.png'
import TwoDAnimation from '../../public/domains/animations.png'
import ThreeDMoodeling from '../../public/domains/3d-modeling.png'
import VideoEditing from '../../public/domains/video-editing.png'



const faqs = [
    {
        id: 1,
        header: "Web Technologies",
        text: <div className='flex flex-col [&>*]:mb-[1rem] [&>*]:flex [&>*]:items-center'>
        <Link href='/explore/web-technologies/frontend-development' ><span><Image width={200} height={200} className='h-[3rem] w-[3rem] rounded-[2rem] mr-[1rem]' src={FrontendDevelopment} alt='Skill Logo' /></span>Frontend Development</Link>

        <Link href='/explore/web-technologies/backend-development' ><span><Image width={200} height={200} className='h-[3rem] w-[3rem] rounded-
        [2rem] mr-[1rem]' src={BackendDevelopment} alt='Skill Logo' /></span>Backend Development</Link>
        
        <Link href='/explore/web-technologies/ai-ml' ><span><Image width={200} height={200} className='h-[3rem] w-[3rem] rounded-[2rem] mr-[1rem]' src={AIML} alt='Skill Logo' /></span>AI / ML</Link>
        
        <Link href='/explore/web-technologies/quantum-computing' ><span><Image width={200} height={200} className='h-[3rem] w-[3rem] rounded-[2rem] mr-[1rem]' src={QuantumComputing} alt='Skill Logo' /></span>Quantum Computing</Link>
        
        <Link href='/explore/web-technologies/blockchain-development' ><span><Image width={200} height={200} className='h-[3rem] w-[3rem] rounded-[2rem] mr-[1rem]' src={BlockchainDevelopment} alt='Skill Logo' /></span>Blockchain Development</Link>
        
        <Link href='/explore/web-technologies/ar-vr' ><span><Image width={200} height={200} className='h-[3rem] w-[3rem] rounded-[2rem] mr-[1rem]' src={ARVR} alt='Skill Logo' /></span>Augmented & Virtual Reality</Link>
        
        <Link href='/explore/web-technologies/cloud-computing' ><span><Image width={200} height={200} className='h-[3rem] w-[3rem] rounded-[2rem] mr-[1rem]' src={CloudComputing} alt='Skill Logo' /></span>Cloud Computing</Link>
        
        <Link href='/explore/web-technologies/data-science' ><span><Image width={200} height={200} className='h-[3rem] w-[3rem] rounded-[2rem] mr-[1rem]' src={DataScience} alt='Skill Logo' /></span>Data Science</Link>
        
        <Link href='/explore/web-technologies/devops' ><span><Image width={200} height={200} className='h-[3rem] w-[3rem] rounded-[2rem] mr-[1rem]' src={DevOps} alt='Skill Logo' /></span>DevOps</Link>
        
        <Link href='/explore/web-technologies/cyber-security' ><span><Image width={200} height={200} className='h-[3rem] w-[3rem] rounded-[2rem] mr-[1rem]' src={CyberSecurity} alt='Skill Logo' /></span>Cyber Security</Link>
        
        <Link href='/explore/web-technologies/technical-writing' ><span><Image width={200} height={200} className='h-[3rem] w-[3rem] rounded-[2rem] mr-[1rem]' src={TechnicalWriting} alt='Skill Logo' /></span>Technical Writing</Link>
        
        <Link href='/explore/web-technologies/game-development' ><span><Image width={200} height={200} className='h-[3rem] w-[3rem] rounded-[2rem] mr-[1rem]' src={GameDevelopment} alt='Skill Logo' /></span>Game Development</Link>
        
        <Link href='/explore/web-technologies/application-development' ><span><Image width={200} height={200} className='h-[3rem] w-[3rem] rounded-[2rem] mr-[1rem]' src={ApplicationDevelopment} alt='Skill Logo' /></span>App Development</Link>
        
        <Link href='/explore/web-technologies/data-structures-algorithms' ><span><Image width={200} height={200} className='h-[3rem] w-[3rem] rounded-[2rem] mr-[1rem]' src={BackendDevelopment} alt='Skill Logo' /></span>Data Structures Algorithms</Link>
        </div>,
    },
    {
        id: 2,
        header: "Non-Technical",
        text: <div className='flex flex-col [&>*]:mb-[1rem] [&>*]:flex [&>*]:items-center'>
        
        <Link href='/explore/non-technical/sales' ><span><Image width={200} height={200} className='h-[3rem] w-[3rem] rounded-[2rem] mr-[1rem]' src={Sales} alt='Skill Logo' /></span>Sales</Link>
        
        <Link href='/explore/non-technical/business-associate' ><span><Image width={200} height={200} className='h-[3rem] w-[3rem] rounded-[2rem] mr-[1rem]' src={BusinessAssociate} alt='Skill Logo' /></span>Business Associate</Link>
        
        <Link href='/explore/non-technical/copy-writing' ><span><Image width={200} height={200} className='h-[3rem] w-[3rem] rounded-[2rem] mr-[1rem]' src={CopyWriting} alt='Skill Logo' /></span>Copy Writing</Link>
        
        <Link href='/explore/non-technical/social-media-management' ><span><Image width={200} height={200} className='h-[3rem] w-[3rem] rounded-[2rem] mr-[1rem]' src={SocialMediaManagement} alt='Skill Logo' /></span>Social Media Management</Link>
        
        <Link href='/explore/non-technical/community-management' ><span><Image width={200} height={200} className='h-[3rem] w-[3rem] rounded-[2rem] mr-[1rem]' src={CommunityManagement} alt='Skill Logo' /></span>Community Management</Link>
        
        <Link href='/explore/non-technical/digital-marketing' ><span><Image width={200} height={200} className='h-[3rem] w-[3rem] rounded-[2rem] mr-[1rem]' src={DigitalMarketing} alt='Skill Logo' /></span>Digital Marketing</Link>
        
        <Link href='/explore/non-technical/graphic-designing' ><span><Image width={200} height={200} className='h-[3rem] w-[3rem] rounded-[2rem] mr-[1rem]' src={GraphicsDesigning} alt='Skill Logo' /></span>Graphics Designing</Link>
        
        <Link href='/explore/non-technical/influencer-marketing' ><span><Image width={200} height={200} className='h-[3rem] w-[3rem] rounded-[2rem] mr-[1rem]' src={InfluencerMarketing} alt='Skill Logo' /></span>Influencer Marketing</Link>
        </div>,
    },
    {
        id: 3,
        header: "Core Domains",
        text: <div className='flex flex-col [&>*]:mb-[1rem] [&>*]:flex [&>*]:items-center'>
        
        <Link href='/explore/core-domains/3d-printing' ><span><Image width={200} height={200} className='h-[3rem] w-[3rem] rounded-[2rem] mr-[1rem]' src={ThreeDPrinting} alt='Skill Logo' /></span>3-D Printing</Link>
        
        <Link href='/explore/core-domains/welding' ><span><Image width={200} height={200} className='h-[3rem] w-[3rem] rounded-[2rem] mr-[1rem]' src={Welding} alt='Skill Logo' /></span>Welding</Link>
        
        <Link href='/explore/core-domains/metal-forming' ><span><Image width={200} height={200} className='h-[3rem] w-[3rem] rounded-[2rem] mr-[1rem]' src={MetalForming} alt='Skill Logo' /></span>Metal Forming</Link>
        
        <Link href='/explore/core-domains/mechanical-design' ><span><Image width={200} height={200} className='h-[3rem] w-[3rem] rounded-[2rem] mr-[1rem]' src={MechanicalDeisgn} alt='Skill Logo' /></span>Mechanical Design & Modeling</Link>
        
        <Link href='/explore/core-domains/machine-operations' ><span><Image width={200} height={200} className='h-[3rem] w-[3rem] rounded-[2rem] mr-[1rem]' src={MachineOperations} alt='Skill Logo' /></span>Machine Operations</Link>
        
        <Link href='/explore/core-domains/robotics-automation' ><span><Image width={200} height={200} className='h-[3rem] w-[3rem] rounded-[2rem] mr-[1rem]' src={RoboticsAutomation} alt='Skill Logo' /></span>Robotics & Automation</Link>
        
        <Link href='/explore/core-domains/mechatronics' ><span><Image width={200} height={200} className='h-[3rem] w-[3rem] rounded-[2rem] mr-[1rem]' src={Mechatronics} alt='Skill Logo' /></span>Mechatronics</Link>
        
        <Link href='/explore/core-domains/system-engineering' ><span><Image width={200} height={200} className='h-[3rem] w-[3rem] rounded-[2rem] mr-[1rem]' src={SystemEngineering} alt='Skill Logo' /></span>System Engineering</Link>
        
        <Link href='/explore/core-domains/embedded-systems' ><span><Image width={200} height={200} className='h-[3rem] w-[3rem] rounded-[2rem] mr-[1rem]' src={EmbededSystems} alt='Skill Logo' /></span>Embedded Systems</Link>
        
        <Link href='/explore/core-domains/digital-signal-processing' ><span><Image width={200} height={200} className='h-[3rem] w-[3rem] rounded-[2rem] mr-[1rem]' src={DigitalSignalProcessing} alt='Skill Logo' /></span>Digital Signal Processing</Link>
        
        <Link href='/explore/core-domains/microcontroller-programming' ><span><Image width={200} height={200} className='h-[3rem] w-[3rem] rounded-[2rem] mr-[1rem]' src={MicrocontrollerProgramming} alt='Skill Logo' /></span>Microcontroller Programming
        </Link>
        
        <Link href='/explore/core-domains/pcb-designing' ><span><Image width={200} height={200} className='h-[3rem] w-[3rem] rounded-[2rem] mr-[1rem]' src={PCBDesigning} alt='Skill Logo' /></span>PCB Designing</Link>
        
        <Link href='/explore/core-domains/fgpa-programming' ><span><Image width={200} height={200} className='h-[3rem] w-[3rem] rounded-[2rem] mr-[1rem]' src={FGPAProgramming} alt='Skill Logo' /></span>FGPA Programming</Link>
        
        <Link href='/explore/core-domains/internet-of-things' ><span><Image width={200} height={200} className='h-[3rem] w-[3rem] rounded-[2rem] mr-[1rem]' src={InternetOfThings} alt='Skill Logo' /></span>Internet Of Things</Link>
        
        <Link href='/explore/core-domains/analog-digital-electronics' ><span><Image width={200} height={200} className='h-[3rem] w-[3rem] rounded-[2rem] mr-[1rem]' src={AnalogDigitalElectronics} alt='Skill Logo' /></span>Analog & Digital Electronics</Link>
        
        <Link href='/explore/core-domains/wireless-communication' ><span><Image width={200} height={200} className='h-[3rem] w-[3rem] rounded-[2rem] mr-[1rem]' src={FrontendDevelopment} alt='Skill Logo' /></span>Wireless Communication</Link>
        </div>,
    },
    {
        id: 4,
        header: "Media & Design",
        text: <div className='flex flex-col [&>*]:mb-[1rem] [&>*]:flex [&>*]:items-center'>
        
        <Link href='/explore/media-design/ui-ux' ><span><Image width={200} height={200} className='h-[3rem] w-[3rem] rounded-[2rem] mr-[1rem]' src={UIUXDesigning} alt='Skill Logo' /></span>UI UX Designing</Link>
        
        <Link href='/explore/media-design/product-designing' ><span><Image width={200} height={200} className='h-[3rem] w-[3rem] rounded-[2rem] mr-[1rem]' src={ProductDesigning} alt='Skill Logo' /></span>Product Designing</Link>
        
        <Link href='/explore/media-design/film-making' ><span><Image width={200} height={200} className='h-[3rem] w-[3rem] rounded-[2rem] mr-[1rem]' src={FilmMaking} alt='Skill Logo' /></span>Film Making</Link>
        
        <Link href='/explore/media-design/photography' ><span><Image width={200} height={200} className='h-[3rem] w-[3rem] rounded-[2rem] mr-[1rem]' src={Photography} alt='Skill Logo' /></span>Photography</Link>
        
        <Link href='/explore/media-design/vfx' ><span><Image width={200} height={200} className='h-[3rem] w-[3rem] rounded-[2rem] mr-[1rem]' src={VFX} alt='Skill Logo' /></span>VFX</Link>
        
        <Link href='/explore/media-design/animations' ><span><Image width={200} height={200} className='h-[3rem] w-[3rem] rounded-[2rem] mr-[1rem]' src={TwoDAnimation} alt='Skill Logo' /></span>2-D Animation</Link>
        
        <Link href='/explore/media-design/3d-modeling' ><span><Image width={200} height={200} className='h-[3rem] w-[3rem] rounded-[2rem] mr-[1rem]' src={ThreeDMoodeling} alt='Skill Logo' /></span>3-D Modeling</Link>
        
        <Link href='/explore/media-design/motion-graphics' ><span><Image width={200} height={200} className='h-[3rem] w-[3rem] rounded-[2rem] mr-[1rem]' src={FrontendDevelopment} alt='Skill Logo' /></span>Motion Graphics</Link>
        
        <Link href='/explore/media-design/graphic-designing' ><span><Image width={200} height={200} className='h-[3rem] w-[3rem] rounded-[2rem] mr-[1rem]' src={GraphicsDesigning} alt='Skill Logo' /></span>Graphic Designing</Link>
        
        <Link href='/explore/media-design/video-editing' ><span><Image width={200} height={200} className='h-[3rem] w-[3rem] rounded-[2rem] mr-[1rem]' src={VideoEditing} alt='Skill Logo' /></span>Video Editing</Link>
        </div>,
    }
]

const AccordionItem = (props: any) => {
    const contentEl = useRef<HTMLDivElement>(null); // Specify the type of the ref
    const { handlehrefggle, active, faq } = props;
    const { header, id, text } = faq;
  
    return (
      <div className="border-[1px] border-[#ddd] rounded-[5px] mb-[10px] overflow-hidden last:mb-0">
        <div className="">
          <div className={`rc-accordion-toggle flex justify-between items-start cursor-pointer p-3 ${active === id ? 'active' : ''}`} onClick={() => handlehrefggle(id)}>
            <h5 className="rc-accordion-title font-bold text-[1rem] relative mb-0 text-[#b3ceee] p-2">{header}</h5>
            <i className="fa fa-chevron-down relative top-[2px] text-white text-[12px] rc-accordion-icon"></i>
          </div>
        </div>
        <div ref={contentEl} className={`rc-collapse ${active === id ? 'show' : ''}`} style={
          active === id
            ? { height: contentEl.current?.scrollHeight }
            : { height: "0px" }
        }>
          <div className="p-[15px]">
            <p className='mb-0 text-[1.3rem]'>{text}</p>
          </div>
        </div>
      </div>
    )
  }
  
const DetailSidebar = () => {
    const [active, setActive] = useState(null);

    const handlehrefggle = (index: any) => {
        if (active === index) {
            setActive(null);
        } else {
            setActive(index);
        }
    }
    
    return (
        <>
            <div>
                <div>
                    <div>
                        <div className="text-[1rem] overflow-hidden mx-[1rem] my-[2rem]">
                            <div className="w-[25vw]">
                              <h4 className="mb-[4rem] mx-0 mt-[0rem] text-[2rem] text-white text-center font-bold">Navigation</h4>
                                {faqs.map((faq, index) => {
                                     return (
                                            <AccordionItem key={index} active={active} handlehrefggle={handlehrefggle} faq={faq} />
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default DetailSidebar


