'use client'
import Image from "next/image";

export default function Update({size = 20, setModal}) {
  return (
    <button className="hover:bg-yellow-200/70 md:p-1 rounded-lg" onClick={() => { setModal = true;  console.log(setModal,"Update button clicked");
    }}>
          <Image src="/update.svg" width={size} height={size} alt="update icon" />
      </button>
  )
}
