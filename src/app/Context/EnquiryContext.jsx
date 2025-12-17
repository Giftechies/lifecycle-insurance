"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

const EnquiryContext = createContext(null);

export const EnquiryProvider = ({ children }) => {
  const [enquiries, setEnquiries] = useState([]);

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
  if (!ctx) {
    throw new Error("useEnquiryContext must be used inside EnquiryProvider");
  }
  return ctx;
};
