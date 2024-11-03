import Image from "next/image";

export default function UserForm({ setModal, type, id }) {
  
  function handleCancel() {
    setModal(false);
  }


  return (
    <form className="flex flex-col items-center bg-white w-full sm:w-2/3 lg:w-2/4 xl:w-3/5 rounded-lg shadow-md relative py-[1.5rem] lg:py-[2rem]">
      <button
        onClick={() => setModal(false)}
        className="absolute right-5 top-3"
      >
        <Image src="/cross.svg" alt="cross icon" width={20} height={20} />
      </button>
      {type === "add" ? (
        <div>
          <h1 className="titleHeader">Add User</h1>
          <div>
            <p>{id}</p>
          </div>
        </div>
      ) : type === "update" ? (
        <div>
          <h1 className="titleHeader">Update User</h1>
          <div>
            <p>{id}</p>
          </div>
        </div>
      ) : type === "view" ? (
        <div>
          <h1 className="titleHeader">View User</h1>
          <div>
            <p>{id}</p>
          </div>
        </div>
      ) : type === "delete" ? (
        <div>
          <h1 className="titleHeader">Delete User</h1>
          <div>
            <p>{id}</p>
          </div>
        </div>
      ) : (
        type === "bulkdelete" && (
          <div>
            <h1 className="titleHeader">Delete Selected Users</h1>
            <div>
              <p>{id}</p>
            </div>
          </div>
        )
      )}
    </form>
  );
}
