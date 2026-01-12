import React, { useMemo, useState } from 'react'

function UseMemo() {
  const [number, setNumber] = useState(0);
  const [count, setCount] = useState(0);

  const cuberoot = (num) => {
    console.log("Hello useMemo")
    return Math.pow(num, 3);
  }

  const value = useMemo(() => cuberoot(number), [number]);

  return (
    <div className='main-container'>
      <h1 className="main-heading">Learning useMemo - </h1>

      <p className="hook-definition">
        useMemo is a React Hook that memoizes the result of an expensive calculation
        and recomputes it only when its dependencies change, improving performance.
      </p>

      <ul className="hook-list">
        <li>Optimizing expensive calculations like filtering, sorting, or looping over large arrays.</li>
        <li>Preventing unnecessary recalculations on every render.</li>
        <li>Improving performance in components that re-render frequently.</li>
        <li>Memoizing derived data based on props or state.</li>
      </ul>

      <input className='input' type='number' onChange={(e) => setNumber(e.target.value)}></input>
      <h1>Cube of Number {number} is - ({value})</h1>
      <h1>Count is: {count}</h1>
      <button className='button' onClick={() => setCount(e => e + 1)}>Count++</button>
    </div>
  )
}

export default UseMemo