import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavProvider from "./Components/NavProvider";
import FooterProvider from "./Components/FooterProvider";
import { EnquiryProvider } from "./Context/EnquiryContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LayoutWrapper from "./LayoutWrapper";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  weight: ["100", "200"],
});



export const metadata = {
  metadataBase: new URL("https://www.lifecyclefinancial.co.nz/"),

  title: "LifeCycle Financial",
  description:"Providing expert insurance and mortgage solutions tailored to your needs.",

  openGraph: {
    title: "Financial Advisors Specialise in Mortgage & Insurance in NZ | LifeCycle Financial",
    description:"With over 20 years of experience, we’ve been helping Kiwis with clear, trusted mortgage and insurance advice.",
    url: "https://www.lifecyclefinancial.co.nz/",
    siteName: "LifeCycle Financial",
    images: [
      {
        url: "/life_cycle_logo.png",
        width: 1200,
        height: 630,
        alt: "LifeCycle Financial",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://cdn.jsdelivr.net/npm/remixicon@4.5.0/fonts/remixicon.css"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "LifeCycle Financial",
              url: "https://www.lifecyclefinancial.co.nz",
              logo:
                "https://www.lifecyclefinancial.co.nz/life_cycle_logo.png",
              sameAs: [
                "https://www.facebook.com/Lifecyclefinancial",
                "https://www.instagram.com/lifecycle_financial_services",
              ],
            }),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <EnquiryProvider>
          <NavProvider />
          <LayoutWrapper>{children}</LayoutWrapper>
          <FooterProvider />
        </EnquiryProvider>

        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </body>
      
    </html>
  );
}
