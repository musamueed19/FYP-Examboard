'use client'

import Image from "next/image";

export default function Allocate({size = 20}) {
  return (
      <button className="hover:bg-green-200/70 p-1 rounded-lg" onClick={() =>  console.log("Allocate button clicked")}>

          <Image src="/allocate.svg" width={size} height={size} alt="allocate icon" />
      </button>
  )
}
