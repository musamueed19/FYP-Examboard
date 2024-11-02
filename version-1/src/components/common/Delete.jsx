'use client'

import Image from "next/image";

export default function Delete({size}) {
  return (
      <button className="hover:bg-red-200/70 p-1 rounded-lg" onClick={() =>  console.log("Delete button clicked")}>

          <Image src="/delete.svg" width={size} height={size} alt="bulk delete icon" />
      </button>
  )
}
