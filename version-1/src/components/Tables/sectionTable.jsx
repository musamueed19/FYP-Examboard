"use server";
import { getAll } from "@/lib/Fetcher/fetchAllRecords";
import Update from "../common/Update";
import View from "../common/View";
import Delete from "../common/Delete";

export default async function SectionTable({ setModal }) {
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
          <th>Section</th>
          <th>Coordinator</th>
          <th>From</th>
          <th>To</th>
          <th className="text-right pr-6">Actions</th>
        </tr>
      </thead>
      <tbody>
        {records.users.map((item) => (
          <tr key={item.id}>
            <td>
              <input type="checkbox" />
            </td>
            <td>{item.id}</td>
            <td>{item.company.department}</td>
            <td>{`${item.firstName} ${item.lastName} ${item.maidenName}`}</td>
            <td>15-08-2024</td>
            <td>---</td>
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
