import React from 'react'

export default function Modal({setModal}) {
  return (
    <div className="fixed left-0 top-0 bg-black/50 w-screen h-screen flex items-center justify-center">
      <div className="flex flex-col items-center bg-white w-full sm:w-2/3 lg:w-2/4 rounded-lg shadow-md">
        I am Modal
        <button
          onClick={() => setModal(false)}
          className="border-[#226ffe] text-[#226ffe] bg-white py-2 px-4 rounded-md w-[8rem]"
        >
          Close
        </button>
      </div>
    </div>
  );
}
