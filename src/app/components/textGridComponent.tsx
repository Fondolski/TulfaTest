"use client"

import {useRef, useEffect, useState, useCallback, useLayoutEffect} from 'react'
import Image from "next/image";
import gsap from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger'
import {introductionSofa} from '../assets/images/introductionSofa'






export default function TextGridComponent() {

  const triggerRef = useRef<HTMLDivElement | null>(null);
  const letterRef = useRef<HTMLSpanElement[]>([]);

  const setLetterRef = (ref: HTMLSpanElement | null) => {
    if (ref) letterRef.current.push(ref);
 

  };

  
  const textRef = useRef(null)

  const text = "Lorem ipsum dolor sit amet. Quo odit atque ut architecto obacaecati rem vitae tempore non asperiores consequatur ut error facilis est architecto doloribus eos laborum praesentium!"


  useLayoutEffect(()=> {

    gsap.registerPlugin(ScrollTrigger)

    

    const reveal = gsap.fromTo(
      letterRef.current,
      { opacity: 0.5, color: "white" },
      {
        scrollTrigger: {
          trigger: triggerRef.current,
          scrub: true,
          start: "top center",
          end: "+=800px",
        },
        opacity: 1,
        duration: 15,
        stagger: 1,
      }
    );

    const unreveal = gsap.to(
      letterRef.current,
      
      {
        scrollTrigger: {
          trigger: triggerRef.current,
          scrub: true,
          start: "center center",
          end: "+=200px",
        },
        opacity: 0.5,
        duration: 15,
        stagger: 1,
      }
    );



    

    return() => {
      reveal.kill()
      unreveal.kill()
      
    }

  },[])

  useEffect(()=> {

    console.log(letterRef.current.length, 'length')

  },[letterRef.current])






  return (
    
     
            
              <div ref={triggerRef} className='reveal-body flex items-center flex-col overflow-hidden p-40 pb-48'>
                <div className='reveal max-w-3xl' >
                  {text.split("").map((letter, index)=> {

                    return(

                      <span className='reveal-text md:text-7xl text-5xl font-extrabold' key={index} ref={setLetterRef}>{letter}</span>

                    )
                    
                  })}
                </div>
                
              </div>
              

        
      
  );
}
