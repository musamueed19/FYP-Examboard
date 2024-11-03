'use client'
import { getPaginationData } from "@/lib/Fetcher/fetchPaginationData";
import { useEffect, useState } from "react";

export default function Pagination({setUrl, url}) {

  const [pageData, setPageData] = useState(1);
  const [totalPages, setTotalPages] = useState(1);


  const [formData, setFormData] = useState({
    page: 1,
    rows: 10,
  });

  
  function changeHandler(event) {
    console.log(formData, event);

    setFormData({ ...formData, [event.target.name]: +event.target.value });
  }

  
  async function handlePageData() {
    setPageData(await getPaginationData(url));
  }

  useEffect(() => {
    handlePageData();
    setTotalPages(Math.ceil(pageData / formData.rows));
    console.log(pageData);

     const newUrl = new URL(url);
     newUrl.searchParams.set("limit", formData.rows);
     newUrl.searchParams.set("skip", (formData.page - 1) * formData.rows);

     setUrl(newUrl.toString());
    console.log(formData.page, formData.rows);
    
    
  }, [pageData, formData, url]);

  return (
    <div className="flex items-center justify-between my-2 md:my-6 lg:my-6 w-full mx-auto text-sm">
      {/* LEFT */}
      <div className="font-medium">
        Showing
        <select
          name="rows"
          id="rows"
          className="border-2 border-[#ddd] rounded-md p-2 mx-2 focus:border-black/60 cursor-pointer outline-none"
          onChange={changeHandler}
        >
          <option className="paginationOptions" value="10">
            10
          </option>
          <option className="paginationOptions" value="20">
            20
          </option>
          <option className="paginationOptions" value="30">
            30
          </option>
          <option className="paginationOptions" value="40">
            40
          </option>
          <option className="paginationOptions" value="50">
            50
          </option>
        </select>
        rows per page
      </div>

      {/* RIGHT */}
      <div className="font-medium">
        Page
        <select
          name="page"
          id="page"
          className="border-2 border-[#ddd] rounded-md p-2 mx-2 focus:border-black/40 cursor-pointer outline-none"
          onChange={changeHandler}
        >
          {/* <option className="paginationOptions" value="1">
            1
          </option> */}
          {[...Array(totalPages)].map((_, i) => (
            <option key={i} className="paginationOptions" value={i + 1}>
              {i + 1}
            </option>
          ))}
        </select>
        of {totalPages}
      </div>
    </div>
  );
}
