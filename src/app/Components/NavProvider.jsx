'use client'

import { usePathname } from "next/navigation"
import Nav from './Nav/Nav'

export default function NavProvider(){

    const pathname = usePathname()
    if(pathname.startsWith("/life-backend")){
    return null
}
    return <Nav/>
     
    
}