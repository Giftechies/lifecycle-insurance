"use client"

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Nav from "./Components/Nav/Nav";
import Footer from "./Components/Footer/Footer";
import { useState } from "react";
import MobileMenuOverlay from "./Components/MobileMenuOverlay/MobileMenuOverlay";
import { EnquiryProvider } from "./Context/EnquiryContext";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

   const [isMenuOpen, setIsMenuOpen] = useState(false);
   
  return (
    <html lang="en">
      <link
    href="https://cdn.jsdelivr.net/npm/remixicon@4.5.0/fonts/remixicon.css"
    rel="stylesheet"
/>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <EnquiryProvider>
          <Nav setIsMenuOpen={setIsMenuOpen}  />
        {children}
        <Footer/>
         {isMenuOpen && (
          <MobileMenuOverlay setIsMenuOpen={setIsMenuOpen}  />
        )}
        </EnquiryProvider>
      </body>
    </html>
  );
}
