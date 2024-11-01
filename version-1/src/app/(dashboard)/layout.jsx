import React from 'react'

export default function DashboardLayout({children}) {
  return (
    <div className='max-w-screen w-screen h-screen max-h-fit flex'>

      <div className='h-full bg-slate-300 w-[12%]'>
        
      </div>


      <div className='w-[88%] bg-red-100'>
{children}
      </div>
    </div>
  )
}
