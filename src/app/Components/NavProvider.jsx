'use client'

import { usePathname } from "next/navigation"
import { useState } from "react"
import Nav from './Nav/Nav'

export default function NavProvider(){
    const [showNav,setShowNav] = useState(true)
    const pathname = usePathname()
    return (
      <>
       {!pathname ==='/life-backend' && <Nav/>}
       </>
    )
}