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
  title: "LifeCycle Insurance",
  description: "Providing expert insurance and mortgage solutions tailored to your needs.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://cdn.jsdelivr.net/npm/remixicon@4.5.0/fonts/remixicon.css"
          rel="stylesheet"
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
