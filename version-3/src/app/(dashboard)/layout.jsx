'use client'

import Navbar from "@/components/dashboard/Navbar";
import Sidebar from "@/components/dashboard/Sidebar";
import { useState } from "react";

export default function DashboardLayout({ children }) {

  
    const [expanded, setExpanded] = useState(true);

  return (
    <div className="max-w-screen w-screen h-fit max-h-fit flex">
      <div className={`h-fit ${expanded ? "max-w-[10%] w-[10%] md:max-w-[16%] md:w-[16%]" : "w-fit"} sticky top-0`}>
        <Sidebar setExpanded={setExpanded} expanded={expanded} />
      </div>

      <div className={`w-full ${expanded ? "max-w-[90%] w-[90%] md:max-w-[84%] md:w-[84%]" : ""}`}>
        <Navbar />
        {children}
      </div>
    </div>
  );
}
