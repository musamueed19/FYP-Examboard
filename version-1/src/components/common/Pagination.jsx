export default function Pagination() {
  return (
    <div className='flex items-center justify-between my-2 md:my-6 lg:my-6 w-full mx-auto text-sm'>
      {/* LEFT */}
      <div className='font-medium'>Showing
        <select name="rows" id="rows" className='border-2 border-[#ddd] rounded-md p-2 mx-2 focus:border-black/60 cursor-pointer outline-none'>
          <option className="paginationOptions" value="10">10</option>
          <option className="paginationOptions" value="20">20</option>
          <option className="paginationOptions" value="30">30</option>
          <option className="paginationOptions" value="40">40</option>
          <option className="paginationOptions" value="50">50</option>
        </select>
        rows per page</div>

      {/* RIGHT */}
      <div className='font-medium'>Page 
        <select name="page" id="page" className='border-2 border-[#ddd] rounded-md p-2 mx-2 focus:border-black/40 cursor-pointer outline-none'>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
        of 3
      </div>
    </div>
  )
}
