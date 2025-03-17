"use client"

import { useEffect, useLayoutEffect, useState } from "react"

export default function VideoComponent() {

    return(
        <video width="full" height="full"   className='h-screen w-screen' >
            <source type="video/mp4" src="https://firebasestorage.googleapis.com/v0/b/tukiofusion.appspot.com/o/aerial-video-of-the-sunrise-in-the-dolomites-mount-2023-11-27-05-26-37-utc.mp4?alt=media&token=e08afda8-3274-4fa6-8081-9b6fa1c8e019" />  
            
        </video>
    )

}