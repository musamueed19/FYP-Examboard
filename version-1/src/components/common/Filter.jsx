'use client'
import { useEffect, useState } from "react";

export default function Filter({ label, name, options, multiple = false }) {

const [filterData, setFilterData] = useState()

function changeHandler(event) {
  setFilterData(event.target.value);  
  }
  
  useEffect(() => {
    console.log(name, { label: filterData });
    
  }, [filterData])
  


  return (
    <div className="flex flex-col w-[8rem] justify-center">
      <label htmlFor={name} className="font-bold text-sm text-[#333]">
        {label}
      </label>
      <select
        multiple={multiple}
        name={name}
        className="w-full rounded-md p-1 border border-black/50 bg-[#eaeaea] outline-none text-sm"
        onChange={changeHandler}
        id={name}
      >
        {options.map((option) => (
          <option
            className="paginationOptions"
            key={option.value}
            value={option.value}
          >
            {option.value}
          </option>
        ))}
      </select>
    </div>
  );
}

{
  /*
        <option value="All">All</option>
        <option value="Admin">Admin</option>
        <option value="HoD">HoD</option>
        <option value="Supervisor">Supervisor</option>
 */
}
