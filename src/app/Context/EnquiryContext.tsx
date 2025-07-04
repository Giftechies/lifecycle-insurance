"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

export interface EnquiryData {
  id: string;
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

interface EnquiryContextType {
  enquiries: EnquiryData[];
  setEnquiries: React.Dispatch<React.SetStateAction<EnquiryData[]>>;
}

const EnquiryContext = createContext<EnquiryContextType | null>(null);

export const EnquiryProvider = ({ children }: { children: React.ReactNode }) => {
  const [enquiries, setEnquiries] = useState<EnquiryData[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem("enquiries");
    if (stored) {
      setEnquiries(JSON.parse(stored));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("enquiries", JSON.stringify(enquiries));
  }, [enquiries]);

  return (
    <EnquiryContext.Provider value={{ enquiries, setEnquiries }}>
      {children}
    </EnquiryContext.Provider>
  );
};

export const useEnquiryContext = () => {
  const ctx = useContext(EnquiryContext);
  if (!ctx) throw new Error("useEnquiryContext must be inside EnquiryProvider");
  return ctx;
};
