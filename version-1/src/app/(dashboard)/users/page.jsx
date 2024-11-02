'use server'

import Add from "@/components/common/Add";
import Delete from "@/components/common/Delete";
import Filter from "@/components/common/Filter";
import Modal from "@/components/common/Modal";
import Pagination from "@/components/common/Pagination";
import Searchbar from "@/components/common/Searchbar";
import UserForm from "@/components/Forms/UserForm";
import UserTable from "@/components/Tables/userTable";


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


export default async function UsersPage() {
  let modal = false;

  return (
    <div className="container">
      <h1 className="titleHeader">Users Management</h1>

      <div className="tableTopNav">
        {/* Table Filters */}
        <div className="flex gap-6">
          {/* Search Bar */}
          <Searchbar label="User name" />

          {/* Filters */}
          {/* Filter no. 1 */}
          <Filter label="User Role" name="userRole" options={userRoleOptions} multiple />

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
          <Delete size={30} />

          {/* Add Button */}
          <Add size={16} />
        </div>
      </div>

      {/* Table */}

      <UserTable setModal={modal} />

      {/* Pagination */}
      <Pagination />

      <Modal isOpen={modal}>

        <UserForm />
      </Modal>
    </div>
  );
}
