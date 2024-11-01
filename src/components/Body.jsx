import React, { useState } from 'react'

export default function Body() {

  const [truth,setTruth] = useState(false);
  const [tasks,setTasks] = useState([
    {
      title:"Learn React",
      datas:"By Abhijith TG",
      description:"Learning more about react and mastering it is my goal.."
    },
    {
      title:"Learn React",
      datas:"By Abhijith TG",
      description:"Learning more about react and mastering it is my goal.."
    },
    {
      title:"Learn React",
      datas:"By Abhijith TG",
      description:"Learning more about react and mastering it is my goal.."
    },
    {
      title:"Learn React",
      datas:"By Abhijith TG",
      description:"Trying to learn backend "
    },
  ]);

  const showAdditional =(e)=>{
    e.preventDefault()
    setTruth(!truth);
  }




  return (
    <form className=' h-full w-screen bg-slate-900 pb-24 ' >
      <div className='flex justify-center pt-14 gap-5' >
        <input placeholder='Task Title' type="text" className='text-xl outline-none ps-2 rounded' />
        <button className=" bg-purple-600 py-2 px-4 hover:opacity-80  rounded text-white" onClick={showAdditional} >{truth?"Cancel":"More"}</button>
      </div>

      {
        truth &&

        <div className='flex flex-col items-center mt-5 gap-5 justify-center'  >
        <input placeholder='Task Data' type="text" className='text-xl outline-none ps-2 px-24 py-2 rounded' />
        <textarea placeholder='Description...' type="text" className='text-xl outline-none ps-2 px-24 py-2 rounded' />
        <button className=" bg-blue-500 py-2 px-4 hover:opacity-80  rounded text-white" onClick={showAdditional} >Add Task</button>
            
        </div>
      }
      <div className='text-white flex mt-16 gap-5 items-center justify-center   flex-wrap' >
        {
          tasks.map((task,id)=>
            <div key={id} className='w-52 break-all text-center bg-violet-600 p-8 rounded-xl ' >
                <h2>
                  {task.title}

                </h2>
                <p>
                  {task.datas}
                </p>
                <p  >
                  {task.description}
                </p>
                <button className=" bg-green-600 py-1 px-3 hover:opacity-80  rounded text-white">
                  Done
                </button>
                <button className=" bg-red-600 py-1 px-2 hover:opacity-80  rounded text-white">
                  Remove
                </button>
            </div>
          )

        }

      </div>
    </form>
  )
}
