"use client"

import {useRef, useEffect} from 'react'
import Image from "next/image";

export default function Home() {

  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(()=> {

    if(videoRef.current){

      videoRef?.current.play()
      
      console.log(videoRef, "video")
    }

  },[videoRef])

  /**
   * <div className='w-screen h-full z-20 absolute top-0' style={{backgroundImage: 'url(' + `https://firebasestorage.googleapis.com/v0/b/tukiofusion.appspot.com/o/introducing.png?alt=media&token=72322322-5a4d-400b-b3ab-b543380151ac` + ')', backgroundSize: 'cover',
                            backgroundRepeat: 'no-repeat', overflow: 'hidden'}}></div>
   */


  return (
    <div className=" min-h-screen flex flex-col items-center overflow-hidden">
      <main className="">
        <div className=''>
          <video width="full" height="full"  autoPlay={true} className='h-screen w-screen' ref={videoRef} muted style={{objectFit: 'cover'}} >
            <source type="video/mp4" src="https://firebasestorage.googleapis.com/v0/b/tukiofusion.appspot.com/o/aerial-video-of-the-sunrise-in-the-dolomites-mount-2023-11-27-05-26-37-utc.mp4?alt=media&token=e08afda8-3274-4fa6-8081-9b6fa1c8e019" />  
            
          </video>
          <div className='bg-white z-20 absolute w-full h-auto min-h-screen top-0 mix-blend-lighten items-center justify-center flex'>
            <div>
              <h1 className='md:text-8xl text-8xl font-extrabold mix-blend-burn'>Introducing</h1>
            </div>
            
          </div>
        </div>
        
        
      </main>
      <footer className="">
        
      </footer>
    </div>
  );
}
