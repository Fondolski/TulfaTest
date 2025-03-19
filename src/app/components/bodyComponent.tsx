"use client"

import {useRef, useEffect, useState, useCallback, useLayoutEffect} from 'react'
import Image from "next/image";
import gsap from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger'
import VirtualPhotographyComponent from './virtualPhotographyComponent';
import TextGridComponent from './textGridComponent';




export default function BodyComponent() {

  const introductionRef = useRef(null);


  useEffect(()=> {


    (
      async () => {

        const LocomotiveScroll = (await import('locomotive-scroll')).default

        const locomotiveScroll = new LocomotiveScroll()
        
      }
    )()

  },[])

  useLayoutEffect(()=> {


    gsap.from(introductionRef.current, {
      scale: 3,
      duration: 2
    })

    

  },[])


  useLayoutEffect(()=> {

    gsap.registerPlugin(ScrollTrigger)

    

  },[])

  







  return (
    
          <div className=' min-h-screen top-0 absolute w-full overflow-x-hidden '>
            <div className='bg-white z-20 w-full h-screen  mix-blend-lighten items-center justify-center flex flex-col'>
              <div className='h-screen flex items-center justify-center '>
                <h1 className='md:text-8xl text-6xl  font-extrabold mix-blend-burn' ref={introductionRef} id='introduction'>Introducing</h1>
              </div>      
            </div>
            <VirtualPhotographyComponent />
            <TextGridComponent />
          </div>
        
        
        
      
  );
}
