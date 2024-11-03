'use client'

import Image from "next/image";

export default function Delete({ size = 20, setModal, setType, id, setId }) {
  function handleDelete() {
    console.log(setModal, "Delete button clicked");
    setId(id);
    setModal(true);
    setType("delete");
  }

  return (
    <button
      className="hover:bg-red-200/70 p-1 rounded-lg"
      onClick={handleDelete}
    >
      <Image src="/delete.svg" width={size} height={size} alt="delete icon" />
    </button>
  );
}
