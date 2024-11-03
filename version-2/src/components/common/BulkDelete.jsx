'use client'

import Image from "next/image";

export default function BulkDelete({ size = 20, setModal, setType }) {
    
    function handleDelete() {
      console.log(setModal, "Bulk delete button clicked");
      setModal(true);
      setType("bulkdelete");
    }


  return (
      <button className="hover:bg-red-200/70 p-1 rounded-lg" onClick={handleDelete}>

          <Image src="/delete.svg" width={size} height={size} alt="delete icon" />
      </button>
  )
}
