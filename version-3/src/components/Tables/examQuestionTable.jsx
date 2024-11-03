"use server";
import { getAll } from "@/lib/Fetcher/fetchAllRecords";
import Update from "../common/Update";
import View from "../common/View";
import Delete from "../common/Delete";
import Allocate from "../common/Allocate";

export default async function ExamQuestionTable({ setModal }) {
  let records = [];
  records = await getAll("https://dummyjson.com/users?limit=10");
  console.log(records);

  if (records.length === 0)
    return (
      <div className="flex justify-center font-bold items-center h-64">
        <p>No record found.</p>
      </div>
    );

  return (
    <table className="w-full mt-8">
      <thead className="font-bold">
        <tr>
          <th id="tableCheckbox">
            <input type="checkbox" />
          </th>
          <th>Sr. #</th>
          <th>Question ID</th>
          <th>Course</th>
          <th>Marks</th>
          <th>Faculty</th>
          <th className="text-right pr-6">Actions</th>
          <th className="text-right pr-6">Allocate</th>
        </tr>
      </thead>
      <tbody>
        {records.users.map((item) => (
          <tr key={item.id}>
            <td>
              <input type="checkbox" />
            </td>
            <td>{item.id}</td>
            <td>115689</td>
            <td>{item.company.department}</td>
            <td>3</td>

            <td>{`${item.firstName} ${item.lastName} ${item.maidenName}`}</td>
            <td className="flex gap-2 justify-end">
              <Update size={20} />
              <View size={20} />
              <Delete size={20} />
            </td>
            <td>
              <div className="flex mr-6 justify-end">
                <Allocate size={20} />
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
