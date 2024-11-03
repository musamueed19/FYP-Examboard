"use server";

import Add from "@/components/common/Add";
import Delete from "@/components/common/Delete";
import Filter from "@/components/common/Filter";
import Modal from "@/components/common/Modal";
import Pagination from "@/components/common/Pagination";
import Searchbar from "@/components/common/Searchbar";
import UserForm from "@/components/Forms/UserForm";
import SemesterTable from "@/components/Tables/semesterTable";


const semesterStatusOptions = [
  { value: "All" },
  { value: "Active" },
  { value: "Inactive" },
];

export default async function SemestersPage() {
  let modal = false;

  return (
    <div className="container">
      <h1 className="titleHeader">Semesters Management</h1>

      <div className="tableTopNav">
        {/* Table Filters */}
        <div className="flex gap-6">
          {/* Search Bar */}
          <Searchbar label="Semester name" />

          {/* Filters Section */}
          <Filter label="Semester Status" name="semesterStatus" options={semesterStatusOptions} />
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

      <SemesterTable setModal={modal} />

      {/* Pagination */}
      <Pagination />

      <Modal isOpen={modal}>
        <UserForm />
      </Modal>
    </div>
  );
}
