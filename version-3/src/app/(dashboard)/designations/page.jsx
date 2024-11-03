"use server";

import Add from "@/components/common/Add";
import Delete from "@/components/common/Delete";
import Modal from "@/components/common/Modal";
import Pagination from "@/components/common/Pagination";
import Searchbar from "@/components/common/Searchbar";
import UserForm from "@/components/Forms/UserForm";
import DesignationTable from "@/components/Tables/designationTable";

export default async function UsersPage() {
  let modal = false;

  return (
    <div className="container">
      <h1 className="titleHeader">Designations Management</h1>

      <div className="tableTopNav">
        {/* Table Filters */}
        <div className="flex gap-6">
          {/* Search Bar */}
          <Searchbar label="Designation" />
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

      <DesignationTable setModal={modal} />

      {/* Pagination */}
      <Pagination />

      <Modal isOpen={modal}>
        <UserForm />
      </Modal>
    </div>
  );
}
