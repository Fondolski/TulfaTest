"use client"

import {useRef, useEffect, useState, useCallback} from 'react'
import Image from "next/image";
import { useGSAP } from '@gsap/react';
import useScroll from './hooks/useScroll';
import onScrollStop from './hooks/onScrollStop';


export default function Home() {

  const videoRef = useRef<HTMLVideoElement>(null)

  const [isPlaying, setIsPlaying] = useState(false)

  const [scrollDirection, setScrollDirection] = useState('up')
 

  useEffect(()=> {

    if(videoRef.current){

      
      
      console.log(videoRef, "video")
    }

  },[videoRef])


 const playVideo = () => {

  if(videoRef.current){

    if(videoRef.current.paused === true || videoRef.current.currentTime === 0)
    

    

    videoRef?.current.play()

    

   //clearTimeout(newPause)
  
    
  }

 }

 useEffect(()=> {

 },)



onScrollStop(() => {

  console.log('The user has stopped scrolling');

  if(videoRef.current) {

    if(videoRef?.current.paused === false) {

      videoRef?.current.pause()

    }

    

  

  }
});

 /** 

useEffect(function mount() {

  
  function onScroll(event) {

   // console.log(event)

    //  console.log(event.deltaY)

      if(videoRef.current) {

        if(event.deltaY < 0) {

         // videoRef?.current.pause()

        } else {
        //  videoRef?.current.play()
        }

      }
    

    //console.log(callback())

 
  }

  window.addEventListener('mousewheel', onScroll);
  

  return function unMount() {
    window.removeEventListener('mousewheel', onScroll);
    
  };
});

*/

      
  
   
    
  




/** 
  const [y, setY] = useState(window.scrollY);

const handleNavigation = useCallback(
  e => {
    const window = e.currentTarget;
    if (y > window.scrollY) {
      console.log("scrolling up");
    } else if (y < window.scrollY) {
      console.log("scrolling down");
    }
    setY(window.scrollY);
  }, [y]
);

useEffect(() => {
  setY(window.scrollY);
  console.log(window.scrollY)
  window.addEventListener("scroll", handleNavigation);

  return () => {
    window.removeEventListener("scroll", handleNavigation);
  };
}, [handleNavigation]);

  /**
   * <div className='w-screen h-full z-20 absolute top-0' style={{backgroundImage: 'url(' + `https://firebasestorage.googleapis.com/v0/b/tukiofusion.appspot.com/o/introducing.png?alt=media&token=72322322-5a4d-400b-b3ab-b543380151ac` + ')', backgroundSize: 'cover',
                            backgroundRepeat: 'no-repeat', overflow: 'hidden'}}></div>
   */


  return (
    <div className=" min-h-screen flex flex-col items-center overflow-hidden">
      <main className="">
        <div className=''>
          <video width="full" height="full"   className='h-screen w-screen' ref={videoRef} muted autoPlay style={{objectFit: 'cover'}} onWheel={()=> playVideo()} >
            <source type="video/mp4" src="https://firebasestorage.googleapis.com/v0/b/tukiofusion.appspot.com/o/aerial-video-of-the-sunrise-in-the-dolomites-mount-2023-11-27-05-26-37-utc.mp4?alt=media&token=e08afda8-3274-4fa6-8081-9b6fa1c8e019" />  
            
          </video>
          <div className='bg-white z-20  w-full h-auto min-h-screen top-0 mix-blend-lighten items-center justify-center flex'>
            <div>
              <h1 className='md:text-8xl text-6xl font-extrabold mix-blend-burn'>Introducing</h1>
            </div>    
          </div>
        </div>
        
        
      </main>
      <footer className="">
        
      </footer>
    </div>
  );
}
