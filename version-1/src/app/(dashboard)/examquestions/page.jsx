"use server";

import Add from "@/components/common/Add";
import Delete from "@/components/common/Delete";
import Filter from "@/components/common/Filter";
import Modal from "@/components/common/Modal";
import Pagination from "@/components/common/Pagination";
import UserForm from "@/components/Forms/UserForm";
import ExamQuestionTable from "@/components/Tables/examQuestionTable";


const semesterStatusOptions = [
  { value: "All" },
  { value: "Active" },
  { value: "Inactive" },
];

const courseOptions = [
  { value: "All" },
  { value: "CS101" },
  { value: "CS201" },
  { value: "CS301" },
  { value: "CS601" },
];

const examOptions = [
  { value: "all" },
  { value: "midterm" },
  { value: "finalterm" },
];
const marksOptions = [
  { value: "all" },
  { value: 3 },
  { value: 5 },
];


export default async function ExamQuestionsPage() {
  let modal = false;

  return (
    <div className="container">
      <h1 className="titleHeader">Exam Question Management</h1>

      <div className="tableTopNav">
        {/* Table Filters */}
        <div className="flex gap-6">

          {/* Filters Area */}
          <Filter label="Semester Status" name="semesterStatus" options={semesterStatusOptions} />
          
          <Filter label="Course" name="course" options={courseOptions} />
          
          <Filter  label="Exam" name="exam" options={examOptions} />
          <Filter  label="Marks" name="marks" options={marksOptions} />
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

      <ExamQuestionTable setModal={modal} />

      {/* Pagination */}
      <Pagination />

      <Modal isOpen={modal}>
        <UserForm />
      </Modal>
    </div>
  );
}
