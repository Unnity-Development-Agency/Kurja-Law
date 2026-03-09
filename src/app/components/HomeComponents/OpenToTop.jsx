"use client";
import React from "react";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

const OpenToTop = () => {
  const pathname = usePathname();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default OpenToTop;
