'use client'

import React from 'react'
import { useParams } from 'next/navigation'
import WebTech from './webtech'
import NonTech from './nontech'
import Core from './core'
import Media from './media'
import Misc from './misc'

export default function Category() {
  const params = useParams();

  const route = params.category;

  let component;

  switch(route) {
    case 'nontech' :
      component = <NonTech/>
      break;
    
    case 'core' :
      component = <Core/>
      break;
    
    case 'media' :
      component = <Media/>
      break;

    case'misc' :
      component = <Misc/>
      break;

    default :
      component = <WebTech/>
      break;
  }

  return component;
}
