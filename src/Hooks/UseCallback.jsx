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
      <h1 className='main-heading'>Learning UseCallBack</h1>
      <Children handleProps={newCount} />
      <h1>Count is {count}</h1>
      <button className="button" onClick={handletimer}>Timer</button>
    </div>
  )
}
