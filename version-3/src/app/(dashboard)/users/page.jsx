'use client'
import { useEffect, useState } from "react";

import Add from "@/components/common/Add";
import Filter from "@/components/common/Filter";
import Modal from "@/components/common/Modal";
import Pagination from "@/components/common/Pagination";
import Searchbar from "@/components/common/Searchbar";
import UserForm from "@/components/Forms/UserForm";
import UserTable from "@/components/Tables/userTable";
import { getAll } from "@/lib/Fetcher/fetchAllRecords";
import BulkDelete from "@/components/common/BulkDelete";


const userRoleOptions = [
  {value: "All"},
  {value: "Admin"},
  {value: "HoD"},
  {value: "Supervisor"},
]
const userStatusOptions = [
  {value: "All"},
  {value: "Active"},
  {value: "Inactive"},
]


export default function UsersPage() {

  
  const [modal, setModal] = useState(false);
  const [type, setType] = useState();
  const [records, setRecords] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [userId, setUserId] = useState();
  const [selectedIds, setSelectedIds] = useState([]);
  

  let GET_ALL_URL = `https://dummyjson.com/users`;
  // let GET_SEARCH_URL = `https://dummyjson.com/search?q=${searchData}`;


  const [url, setUrl] = useState(GET_ALL_URL);
  

  async function getUsers() {
    setRecords(await getAll(url));
    
  }

  useEffect(() => {
    getUsers();
    setIsLoading(false);
    console.log(url);
    
  }, [url]);

  return (
    <div className="container">
      <h1 className="titleHeader">Users Management</h1>

      <div className="tableTopNav">
        {/* Table Filters */}
        <div className="flex gap-6">
          {/* Search Bar */}
          <Searchbar label="User name" setUrl={setUrl} url={url} />

          {/* Filters */}
          {/* Filter no. 1 */}
          <Filter label="User Role" name="userRole" options={userRoleOptions} />

          {/* Filter no. 2 */}
          <Filter
            label="User Status"
            name="userStatus"
            options={userStatusOptions}
          />
        </div>

        {/* Table Actions */}
        <div className="flex gap-8 items-center">
          {/* Bulk Delete Button */}
          <BulkDelete size={30} setModal={setModal} setType={setType} />

          {/* Add Button */}
          <Add size={16} setModal={setModal} setType={setType} />
        </div>
      </div>

      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <>
          {/* Table */}

          <UserTable records={records} setModal={setModal} setType={setType} setId={setUserId} setIds={setSelectedIds} />

          {/* Pagination */}
          <Pagination setUrl={setUrl} url={url} />
        </>
      )}

      <Modal isOpen={modal}>
        <UserForm setModal={setModal} type={type} id={userId} ids={selectedIds} />
      </Modal>
    </div>
  );
}
