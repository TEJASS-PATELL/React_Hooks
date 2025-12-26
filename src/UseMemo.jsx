import React, { useMemo, useState } from 'react'

function UseMemo() {
    const [number, setNumber] = useState(0);
    const [count, setCount] = useState(0);

    const cuberoot = (num) => {
        console.log("Hello useMemo")
        return Math.pow(num, 3);
    }

    const value =  useMemo(() => cuberoot(number), [number]);

  return (
    <div className='main-container'>
        <h1>Learning UseMemo</h1>
        <input className='input' type='number' onClick={(e) => setNumber(e.target.value)}></input>
        <h1>Cube of Number {number} is - {value}</h1>
        <h1>Count is: {count}</h1>
        <button className='button' onClick={() => setCount(e => e+1)}>Count++</button>
    </div>
  )
}

export default UseMemo