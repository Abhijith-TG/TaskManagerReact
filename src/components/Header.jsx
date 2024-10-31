import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

export default function Header() {
    const [data, setData] = useState(["hi"]);
    const [typed,setTyped] = useState('');

    function onDataSubmit(e){
        e.preventDefault();
        setData([...data,typed])
        setTyped("")
    }

    useEffect(()=>{
        localStorage.setItem("data",data);
        console.log(data);

    },[data])

    useState(()=>{
       const oldData = localStorage.getItem("data");
       oldData?setData(oldData):setData(["hi","hello"]);
       
       
       
    },[])
    
    function clearFunc(){
        localStorage.clear();
    }
    
    
    

  return (
    <div>
        <h1>Header</h1>

        <form action="" onSubmit={onDataSubmit} >
            <input type="text" required name='texts' value={typed} onChange={(e)=>setTyped(e.target.value)} />
            <button  >Click</button>
        </form>
        <button onClick={clearFunc} > Clear</button>

        {
            data &&
            data.map((d,i)=>{
                return<li key={i} >
                    {d}
                </li>
            })
        }

    </div>
  )
}
