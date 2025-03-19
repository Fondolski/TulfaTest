"use client"

import {useRef, useEffect, useState, useCallback, useLayoutEffect} from 'react'
import Image from "next/image";
import gsap from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger'
import {introductionSofa} from '../assets/images/introductionSofa'






export default function VirtualPhotographyComponent() {

  
  const sofaRef = useRef(null)


  useLayoutEffect(()=> {

    gsap.registerPlugin(ScrollTrigger)

    gsap.from(sofaRef.current, {
      scrollTrigger: {

        trigger: sofaRef.current,
        start: 'top bottom',
        end :'bottom top',
        toggleClass: 'inView',
        onEnter: () => {

          gsap.from(sofaRef.current, {

            duration: 1.5, y: '50%', ease: 'power2.inOut'

          })

          gsap.to(sofaRef.current, {

            duration: 1.5, y: '0%', ease: 'power2.inOut'

          })
          
        }


      },

      
      

    })




  },[])

  






  return (
    
     
            
              <div className='h-screen flex items-center justify-center flex-col overflow-hidden'>
                <h1 className='gradient-text background-animate md:text-7xl text-5xl font-bold text-center   text-transparent animate-gradient '>Virtual Productivity Photography</h1>
                <div id="sofaImage" ref={sofaRef} className=" flex w-full max-w-7xl h-2/6 md:h-full cursor-pointer  bg-white z-20 rounded-md "      
                        style={{backgroundImage: 'url(' + `${introductionSofa.url}` + ')', backgroundSize: 'cover',
                            backgroundRepeat: 'no-repeat', overflow: 'hidden'}} ></div>
              </div>
              
                  
           
     
        
        
        
      
  );
}
