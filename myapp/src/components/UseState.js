import React, { useState } from 'react'

function UseState() {
    const name ="mohammad Naveed"
    const [increament,setIncreament]=useState(0);
    const [toggle,setToogle]=useState(false);
    const handlefunction=()=>{
        setIncreament(increament+1);
        setToogle(!toggle);
    }
  return (
    <div>
        <h1>{name}</h1>
        <h1>{increament}</h1>
        <button onClick={handlefunction}>increase</button>
        <h1>{toggle===false&&"i am pro Developer"}</h1>
    </div>
  )
}

export default UseState