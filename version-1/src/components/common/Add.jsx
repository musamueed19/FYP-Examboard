import Image from "next/image";

export default function Add({size}) {
  return (
    <button className="text-white bg-[#226ffe] flex items-center w-[6rem] justify-center text-lg p-1 rounded-lg gap-2 hover:bg-[#4057ff] font-medium">
      <Image src="/plus.svg" width={size} height={size} alt="plus icon" />
      <span>Add</span>
    </button>
  );
}
