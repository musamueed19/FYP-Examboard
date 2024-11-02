"use server";

import Add from "@/components/common/Add";
import Delete from "@/components/common/Delete";
import Filter from "@/components/common/Filter";
import Modal from "@/components/common/Modal";
import Pagination from "@/components/common/Pagination";
import Searchbar from "@/components/common/Searchbar";
import UserForm from "@/components/Forms/UserForm";
import SectionTable from "@/components/Tables/sectionTable";

const semesterStatusOptions = [
  {value: "all"},
  {value: "active"},
  {value: "inactive"},
]

export default async function SectionsPage() {
  let modal = false;

  return (
    <div className="container">
      <h1 className="titleHeader">Section & Coordinator Management</h1>

      <div className="tableTopNav">
        {/* Table Filters */}
        <div className="flex gap-6">
          {/* Search Bar */}
          <Searchbar label="Coordinator name" />

          {/* Filters Section */}
          {/* Filter no. 1 */}
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

      <SectionTable setModal={modal} />

      {/* Pagination */}
      <Pagination />

      <Modal isOpen={modal}>
        <UserForm />
      </Modal>
    </div>
  );
}
