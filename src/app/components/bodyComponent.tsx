"use client"

import {useRef, useEffect, useState, useCallback} from 'react'
import Image from "next/image";







export default function BodyComponent() {

  

  useEffect(()=> {


    (
      async () => {

        const LocomotiveScroll = (await import('locomotive-scroll')).default

        const locomotiveScroll = new LocomotiveScroll()
        
      }
    )()

  },[])





  return (
    
          
          <div className='bg-white z-20 w-full h-auto absolute overflow-y-scroll min-h-screen top-0 mix-blend-lighten items-center justify-center flex flex-col'>
            <div className='h-screen flex items-center justify-center'>
              <h1 className='md:text-8xl text-6xl font-extrabold mix-blend-burn'>Introducing</h1>
            </div>
            
                 
          </div>
        
        
        
      
  );
}
