'use client'

import Navbar from "@/components/dashboard/Navbar";
import Sidebar from "@/components/dashboard/Sidebar";
import { useState } from "react";

export default function DashboardLayout({ children }) {

  
    const [expanded, setExpanded] = useState(true);

  return (
    <div className="max-w-screen w-screen h-fit max-h-fit flex">
      <div className={`h-fit ${expanded ? "w-[10%] md:w-[18%]" : "w-fit"} sticky top-0`}>
        <Sidebar setExpanded={setExpanded} expanded={expanded} />
      </div>

      <div className={`w-full ${expanded ? "" : ""}`}>
        <Navbar />
        {children}
      </div>
    </div>
  );
}
