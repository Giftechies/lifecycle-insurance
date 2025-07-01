"use client"

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Nav from "./Components/Nav/page";
import Footer from "./Components/Footer/page";
import { useState } from "react";
import MobileMenuOverlay from "./Components/MobileMenuOverlay/page";
import Head from "next/head";

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
        <Nav setIsMenuOpen={setIsMenuOpen} />
        {children}
        <Footer/>
         {isMenuOpen && (
          <MobileMenuOverlay setIsMenuOpen={setIsMenuOpen} />
        )}
      </body>
    </html>
  );
}
