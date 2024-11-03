import Image from "next/image";
import { useRouter } from "next/navigation";

export default function DailyQBForm({ setModal, type, id }) {

    const router = useRouter();

  function handleCancel() {
    setModal(false);
    }
    
    if (type === "view") {
        router.push(`/dailyqb/${id}`)
    }

  return (
    // <form className="flex flex-col items-center bg-white w-full sm:w-2/3 lg:w-2/4 xl:w-3/5 rounded-lg shadow-md relative py-[1.5rem] lg:py-[2rem]">
    //   <button
    //     onClick={handleCancel}
    //     className="absolute right-5 top-3"
    //   >
    //     <Image src="/cross.svg" alt="cross icon" width={20} height={20} />
    //   </button>
    //   {type === "view" && (
    //     <div>
    //       <h1 className="titleHeader">View User</h1>
    //       <div>
    //         <p>{id}</p>
    //       </div>
    //     </div>
    //   )}
      // </form>
      <></>
  );
}
