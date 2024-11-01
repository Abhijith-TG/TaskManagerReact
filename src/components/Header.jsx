import React, { useEffect, useState } from 'react'

export default function Header() {

   
    const [user,setUser] = useState("");
    //hard coded usernames
    const names = [
        "Sam","Alex","Wanda","Stark","Strange"
    ]
    useEffect(()=>{
        const num = Math.floor(Math.random()*5);
        setUser(names[num]);
    },[])

    


  return (
    <div className=' flex flex-col w-screen bg-gray-300 h-24 flex-wrap ' >
        <div className=" flex items-center  justify-around h-full ">
                <div className="flex flex-col ">
            <h1 className=' text-4xl  ' >
             Welcome {user} !
            </h1>
            <h2 className='text-xl text-gray-500' >
                Have a nice day
            </h2>
            </div>
            <div className=' w-12 h-12 bg-violet-400 rounded-full  ' >

            </div>
        </div>
        <div className=' ' >
            
        </div>
    </div>
  )
}
