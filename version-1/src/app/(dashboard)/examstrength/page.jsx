"use server";

import Add from "@/components/common/Add";
import Delete from "@/components/common/Delete";
import Filter from "@/components/common/Filter";
import Modal from "@/components/common/Modal";
import Pagination from "@/components/common/Pagination";
import UserForm from "@/components/Forms/UserForm";
import ExamStrengthTable from "@/components/Tables/examStrengthTable";

const semesterStatusOptions = [
  {value: "all"},
  {value: "active"},
  {value: "inactive"},
]

export default async function ExamStrengthPage() {
  let modal = false;

  return (
    <div className="container">
      <h1 className="titleHeader">Exam Course Wise Strength Management</h1>

      <div className="tableTopNav">
        {/* Table Filters */}
        <div className="flex gap-6">
          {/* Filter Section */}
          <Filter label="Semester" name="semesterStatus" options={semesterStatusOptions} />
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

      <ExamStrengthTable setModal={modal} />

      {/* Pagination */}
      <Pagination />

      <Modal isOpen={modal}>
        <UserForm />
      </Modal>
    </div>
  );
}
