'use client'
import Image from "next/image";

export default function View({size = 20, onClick}) {
  return (
    <button
      className="hover:bg-blue-200/70 p-1 rounded-lg"
      onClick={() => console.log("View button clicked")}
    >
      <Image src="/view.svg" width={size} height={size} alt="view icon" />
    </button>
  );
}
