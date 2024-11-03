"use client";
import { useEffect, useState } from "react";

import DateFilter from "@/components/common/DateFilter";
import Filter from "@/components/common/Filter";
import Modal from "@/components/common/Modal";
import Pagination from "@/components/common/Pagination";
import DailyQBTable from "@/components/Tables/dailyqbTable";
import { getAll } from "@/lib/Fetcher/fetchAllRecords";
import DailyQBForm from "@/components/Forms/DailyQBForm";

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


export default function DailyQBStatusPage() {
  const [modal, setModal] = useState(false);
  const [type, setType] = useState();
  const [records, setRecords] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [qbId, setQbId] = useState();
  const [selectedIds, setSelectedIds] = useState([]);

  let GET_ALL_URL = `https://dummyjson.com/users?limit=10`;

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
      <h1 className="titleHeader">
        Daily (Course Wise) Question Bank Status Management
      </h1>

      <div className="tableTopNav">
        {/* Table Filters */}
        <div className="flex gap-6">
          {/* Filters Area */}
          <Filter
            label="Semester Status"
            name="semesterStatus"
            options={semesterStatusOptions}
          />

          <Filter label="Course" name="course" options={courseOptions} />

          <Filter label="Exam" name="exam" options={examOptions} />

          <DateFilter />
          {/* Table Actions - Empty no actions needed */}
          <div></div>
        </div>
      </div>

      {/* Table */}

      <DailyQBTable records={records} setModal={setModal} setType={setType} setId={setQbId}/>

      {/* Pagination */}
      <Pagination setUrl={setUrl} url={url} />

      <Modal isOpen={modal} className="bg-transparent">
        <DailyQBForm setModal={setModal} type={type} id={qbId}/>
      </Modal>
    </div>
  );
}
