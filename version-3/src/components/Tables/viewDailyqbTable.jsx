"use client";
import { getAll } from "@/lib/Fetcher/fetchAllRecords";
import View from "../common/View";

export default function ViewDailyQBTable({
  records = [],
  setModal,
  setType,
  setId,
}) {
  console.log(records);

  // if (records.length === 0)
  //   return (
  //     <div className="flex justify-center font-bold items-center h-64">
  //       <p>No record found.</p>
  //     </div>
  //   );

  return (
    <table className="w-full mt-8">
      <thead className="font-bold">
        <tr>
          <th id="tableCheckbox">
            <input type="checkbox" />
          </th>
          <th>Sr. #</th>
          <th>Course</th>
          <th>Exam</th>
          <th>Total</th>
          <th>Marked</th>
          <th>Unmarked</th>
          <th className="text-right pr-6">Actions</th>
        </tr>
      </thead>
      <tbody>
        {records.users ? (
          records.users.map((item) => (
            <tr key={item.id}>
              <td>
                <input type="checkbox" />
              </td>
              <td>{item.id}</td>
              <td>{item.company.department}</td>
              <td>Midterm</td>
              <td>1150</td>
              <td>650</td>
              <td>500</td>
              <td className="flex gap-2 justify-end mr-6">
                <View
                  size={20}
                  setModal={setModal}
                  setType={setType}
                  id={item.id}
                  setId={setId}
                />
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan="8" className="text-center">
              No records found.
            </td>
          </tr>
        )}
      </tbody>
    </table>
  );
}
