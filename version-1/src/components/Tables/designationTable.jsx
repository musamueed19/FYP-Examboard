export default function DesignationTable({ records }) {
  let i = 0;
  return (
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
        {records.map((record) => (
          <tr key={i}>
            <td>
              <input type="checkbox" />
            </td>
            <td>{++i}</td>
            <td>{record.designation}</td>
            <td className="space-x-1 w-[12rem] text-right">
              <button
                onClick={() => setModal(true)}
                className="border-black border px-1 rounded-md bg-green-200"
              >
                edit
              </button>
              <button
                onClick={() => setModal(true)}
                className="border-black border px-1 rounded-md bg-slate-400"
              >
                view
              </button>
              <button
                onClick={() => setModal(true)}
                className="border-black border px-1 rounded-md bg-red-500 text-white"
              >
                delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
