import React, { useEffect, useState } from 'react'

export default function UseEffect() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        const id = setTimeout(() => {
        setCount(e => e + 1)
        }, 2000);   

        return () => {
            clearTimeout(id);
        }
    }, [count])

  return (
    <div className='main-container'>
        <h1>Learning UseEffect {count}</h1>
    </div>
  )
}
