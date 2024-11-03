"use server";

import Add from "@/components/common/Add";
import DateFilter from "@/components/common/DateFilter";
import Delete from "@/components/common/Delete";
import Filter from "@/components/common/Filter";
import Modal from "@/components/common/Modal";
import Pagination from "@/components/common/Pagination";
import UserForm from "@/components/Forms/UserForm";
import DailyQBTable from "@/components/Tables/dailyqbTable";

const semesterStatusOptions = [
  {value: 'All'},
  {value: 'Active'},
  {value: 'Inactive'},
]

const courseOptions = [
  {value: 'All'},
  {value: 'CS101'},
  {value: 'CS201'},
  {value: 'CS301'},
  {value: 'CS601'},
]

const examOptions = [
  {value: 'all'},
  {value: 'midterm'},
  {value: 'finalterm'},
]


export default async function DailyQBStatusPage() {
  let modal = false;

  return (
    <div className="container">
      <h1 className="titleHeader">Daily (Course Wise) Question Bank Status Management</h1>

      <div className="tableTopNav">
        {/* Table Filters */}
        <div className="flex gap-6">

          {/* Filters Area */}
          <Filter label="Semester Status" name="semesterStatus" options={semesterStatusOptions} />
          
          <Filter label="Course" name="course" options={courseOptions} />
          
          <Filter  label="Exam" name="exam" options={examOptions} />

          <DateFilter />
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

      <DailyQBTable setModal={modal} />

      {/* Pagination */}
      <Pagination />

      <Modal isOpen={modal}>
        <UserForm />
      </Modal>
    </div>
  );
}
