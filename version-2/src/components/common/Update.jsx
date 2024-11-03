'use client'
import Image from "next/image";

export default function Update({ size = 20, setModal, setType, id, setId }) {
  
  function handleUpdate() {
    console.log(setModal, "Update button clicked");
    setId(id);
    setModal(true);
    setType("update");
    }

  return (
    <button className="hover:bg-yellow-200/70 md:p-1 rounded-lg" onClick={handleUpdate}>
          <Image src="/update.svg" width={size} height={size} alt="update icon" />
      </button>
  )
}
