import React, { useState } from 'react'

function UseMemo() {
    const [number, setNumber] = useState(0);
    const [count, setCount] = useState(0);

    const cuberoot = (num) => {
        console.log("Hello useMemo")
        return Math.pow(num, 3);
    }

    const value = cuberoot(number);

  return (
    <div className='main-container'>
        <h1>Learning UseMemo</h1>
        <input className='input' type='number' onClick={(e) => setNumber(e.target.value)}></input>
        <h1>{value}</h1>
        <button className='button' onClick={}></button>
    </div>
  )
}

export default UseMemo