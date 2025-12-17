"use client"

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Nav from "./Components/Nav/Nav";
import Footer from "./Components/Footer/Footer";
import { useState } from "react";
import MobileMenuOverlay from "./Components/MobileMenuOverlay/MobileMenuOverlay";
import { EnquiryProvider } from "./Context/EnquiryContext";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});



const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  weight: ['100', '200']
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
          <Nav setIsMenuOpen={setIsMenuOpen} />
          {children}
          <Footer />
          {isMenuOpen && (
            <MobileMenuOverlay setIsMenuOpen={setIsMenuOpen} />
          )}
        </EnquiryProvider>
        <ToastContainer
          position="top-right" // Where the toasts will appear
          autoClose={5000}    // How long a toast stays (in ms)
          hideProgressBar={false} // Show or hide progress bar
          newestOnTop={false} // Newest toast on top or bottom
          closeOnClick // Close toast on click
          rtl={false} // Right-to-left support
          pauseOnFocusLoss // Pause on window blur
          draggable // Allow dragging toasts
          pauseOnHover // Pause autoclose on hover
          theme="light" // Visual theme: "light", "dark", or "colored"
        />
      </body>
    </html>
  );
}
