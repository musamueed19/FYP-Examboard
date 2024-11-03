"use server";
import { getAll } from "@/lib/Fetcher/fetchAllRecords";
import Update from "../common/Update";
import View from "../common/View";
import Delete from "../common/Delete";

export default async function ExamStrengthTable({ setModal }) {
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
          <td id="tableCheckbox">
            <input type="checkbox" />
          </td>
          <td>Sr. #</td>
          <td>Semester</td>
          <td>Course</td>
          <td>Exam Type</td>
          <td>Students</td>
          <td>Exam Date</td>
          <td className="text-right pr-6">Actions</td>
        </tr>
      </thead>
      <tbody>
        {records.users.map((item) => (
          <tr key={item.id}>
            <td>
              <input type="checkbox" />
            </td>
            <td>{item.id}</td>
            <td>{item.company.title}</td>
            <td>{item.company.department}</td>
            <td className="capitalize">final term</td>
            <td>1075</td>
            <td>21-03-2024</td>
            <td className="flex gap-2 justify-end">
              <Update size={20} setModal={setModal} />
              <View size={20} />
              <Delete size={20} />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
