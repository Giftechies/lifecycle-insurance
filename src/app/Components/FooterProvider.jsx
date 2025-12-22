'use client'

import { usePathname } from "next/navigation"
import Footer from './Footer/Footer'
export default function footeProvider(){
const pathname = usePathname()


if(pathname.startsWith("/life-backend") || pathname==="/login"){
    return null
}

return(
    <>
     <Footer/>
    </>
)
}