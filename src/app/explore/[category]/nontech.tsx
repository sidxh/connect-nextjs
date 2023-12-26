import React from 'react'
import Carousel from '@/components/Carousel'

export default function NonTech() {
  return(
    <section className="max-w-[1200px] px-[4rem] sm:px-0 text-center mx-auto">
    <Carousel 
    title="Non-Technical" 
    img1="frontend-development.png"
    url1="/explore/non-technical/frontend-development"
    dataimg1="Sales"

    img2="business-associate.png"
    url2="/explore/non-technical/business-associate"
    dataimg2="Business Associate"

    img3="copy-writing.png"
    url3="/explore/non-technical/copy-writing"
    dataimg3="Copy Writing"

    img4="social-media-management.png"
    url4="/explore/non-technical/social-media-management"
    dataimg4="Social Media Management"

    img5="community-management.png"
    url5="/explore/non-technical/community-management"
    dataimg5="Community Management"

    img6="digital-marketing.png"
    url6="/explore/non-technical/digital-marketing"
    dataimg6="Digital Marketing"

    img7="graphic-designing.png"
    url7="/explore/non-technical/graphic-designing"
    dataimg7="Graphic Design"

    img8="influencer-marketing.png"
    url8="/explore/non-technical/influencer-marketing"
    dataimg8="Influencer Marketing"

    />
    </section>
)
}
