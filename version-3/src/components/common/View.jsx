'use client'
import Image from "next/image";

export default function View({ size = 20, setModal, setType, id, setId }) {
  function handleView() {
    console.log(setModal, "View button clicked");
    setId(id);
    setModal(true);
    setType("view");
  }

  return (
    <button
      className="hover:bg-blue-200/70 p-1 rounded-lg"
      onClick={handleView}
    >
      <Image src="/view.svg" width={size} height={size} alt="view icon" />
    </button>
  );
}
