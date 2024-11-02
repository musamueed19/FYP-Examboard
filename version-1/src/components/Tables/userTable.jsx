'use client'
import Update from "../common/Update";
import View from "../common/View";
import Delete from "../common/Delete";

export default function UserTable({ records=[] }) {
  
  console.log(records);

  // if (records.length === 0) 
  //      return (
  //        <div className="flex justify-center font-bold items-center h-64">
  //          <p>No record found.</p>
  //        </div>
  //      );
   

  return (
    <table className="w-full mt-8">
      <thead className="font-bold">
        <tr>
          <td id="tableCheckbox">
            <input type="checkbox" />
          </td>
          <td>Sr. #</td>
          <td>Name</td>
          <td>Email</td>
          <td>Role</td>
          <td>Status</td>
          <td>Designation</td>
          <td className="text-right pr-6">Actions</td>
        </tr>
      </thead>
      <tbody>
      {records.users ? (
        (records.users.map((item) => (
          <tr key={item.id}>
            <td>
              <input type="checkbox" />
            </td>
            <td>{item.id}</td>
            <td>{`${item.firstName} ${item.lastName} ${item.maidenName}`}</td>
            <td>{item.email}</td>
            <td className="capitalize">{item.role}</td>
            <td>Active</td>
            <td>{item.company.title}</td>
            <td className="flex gap-2 justify-end">
              <Update size={20} />
              <View size={20} />
              <Delete size={20} />
            </td>
          </tr>
        )))
      ) : (
    <tr>
      <td colSpan="8" className="text-center">No records found.</td>
    </tr>
  )}
      </tbody>
    </table>
  );
}
