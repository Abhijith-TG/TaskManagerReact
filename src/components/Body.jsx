import React from 'react'

export default function Body() {
  return (
    <div className=' h-screen w-screen bg-slate-900' >
      <div className='flex justify-center pt-14 gap-5' >
        <input type="text" className='text-xl outline-none ps-2 rounded' />
        <button className=" bg-purple-600 py-2 px-4 hover:opacity-80  rounded text-white" >Add</button>
      </div>
    </div>
  )
}
