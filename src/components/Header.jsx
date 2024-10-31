import React from 'react'
import { useState } from 'react'

export default function Header() {
    const [data, setData] = useState([]);
    const [typed,setTyped] = useState('');

    function onDataSubmit(e){
        e.preventDefault();
        setData([...data,typed])
        console.log(data);
        setTyped("")
    }
    
    
    

  return (
    <div>
        <h1>Header</h1>

        <form action="" onSubmit={onDataSubmit} >
            <input type="text" required name='texts' value={typed} onChange={(e)=>setTyped(e.target.value)} />
            <button  >Click</button>
        </form>

       

    </div>
  )
}
