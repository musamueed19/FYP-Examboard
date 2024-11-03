'use client'

import Modal from "@/components/common/Modal";
import { getDesignations } from "@/lib/Fetcher/fetch-designations";
import { useEffect, useState } from "react";
  

export default function DesignationsPage() {

  const [modal, setModal] = useState(false);


  const [records, setRecords] = useState([]);
  let i = 0;
  async function fetchData() {
       try {
         const data = await getDesignations(
           "http://192.168.50.219:3000/designations"
         );
         setRecords(data);
       } catch (error) {
         console.error("Failed to fetch designations:", error);
       }
     }
  useEffect(() => {
    fetchData();
  }, []);


  return (
    <div className="w-full flex flex-col p-8">
      <h1 className="flex justify-center text-3xl font-medium">
        Designation Management
      </h1>

      <div className="mt-8 flex justify-between items-center">
        <div className="flex flex-col w-[12rem]">
          <label htmlFor="searchbar" className="text-sm font-medium">
            Designation:
          </label>
          <div className="bg-white rounded-md px-2">
            <input
              type="text"
              placeholder="Search..."
              className="bg-transparent outline-none w-full"
            />
          </div>
        </div>

        <div>
          <button className="bg-[#226ffe] text-white font-medium py-2 px-6 rounded-md">+ Add</button>
        </div>
      </div>




      <table className="w-full mt-8">
        <thead>
          <tr className="tableRow">
            <td>
              <input type="checkbox" />
            </td>
            <td>Sr. #</td>
            <td>Designation</td>
            <td className="text-right">Actions</td>

          </tr>
        </thead>
        <tbody>
          {records.map(record => (
            <tr key={i}>
              <td><input type="checkbox" /></td>
              <td>{++i}</td>
              <td>{record.designation}</td>
              <td className="space-x-1 w-[12rem] text-right">
                <button onClick={() => setModal(true)} className="border-black border px-1 rounded-md bg-green-200">edit</button>
                <button onClick={() => setModal(true)} className="border-black border px-1 rounded-md bg-slate-400">view</button>
                <button onClick={() => setModal(true)} className="border-black border px-1 rounded-md bg-red-500 text-white">delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      

      {modal && <Modal setModal={setModal} />}
    </div>
  );
}
