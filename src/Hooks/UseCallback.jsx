import React, { useCallback, useState } from 'react'
import Children from '../components/Children'

export default function UseCallback() {
  const [count, setCount] = useState(1);
  const [value, setValue] = useState(1);

  const handletimer = () => {
    setTimeout(() => {
      setValue(e => e + 1);
    }, 5000);
  };

  const newCount = useCallback(() => setCount(count => count + value), [value])

  return (
    <div className='main-container'>
      <h1 className="main-heading">Learning useCallback - </h1>

      <p className="hook-definition">
        useCallback is a React Hook that memoizes a function and returns the same
        function instance unless its dependencies change, helping prevent
        unnecessary re-renders.
      </p>

      <ul className="hook-listt">
        <li>Passing callback functions to memoized child components.</li>
        <li>Preventing re-creation of functions on every render.</li>
        <li>Optimizing performance in components with frequent re-renders.</li>
        <li>Using stable function references in dependency arrays.</li>
      </ul>

      <Children handleProps={newCount} />
      <h1>Count is {count}</h1>
      <button className="button" onClick={handletimer}>Timer</button>
    </div>
  )
}
