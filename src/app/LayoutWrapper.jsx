"use client"
import {ReactLenis} from "lenis/react"
export default function LayoutWrapper({children}){
    return(
        <div>
           <ReactLenis root options={{ lerp: 0.2, duration:2, smoothWheel: true }}>
          {children}
        </ReactLenis>
        </div>
    )
}