import React, { useEffect, useRef, useState } from 'react'

export default function UseRef() {
    const [value, setValue] = useState(0);
    // const count = useRef(value);
    const countRef = useRef(0);
    const inputElem = useRef();
    const [count, setCount] = useState(0);

    useEffect(() => {
        countRef.current += 1;
        setCount(countRef.current); // state bridges ref → UI
    }, [value]);


    const btnClick = () => {
        console.log(inputElem.current);
        console.log(inputElem.current.value)
        inputElem.current.style.color = "white"
        inputElem.current.style.backgroundColor = "orange"
    }

    // console.log(count.current)

    return (
        <div className='main-container'>
            <h1 className="main-heading">Learning useRef - </h1>

            <p className="hook-definition">
                useRef is a React Hook that allows you to create a mutable reference
                that persists across renders without causing a re-render when updated.
            </p>

            <ul className="hook-list">
                <li>Accessing and manipulating DOM elements directly (focus input, scroll).</li>
                <li>Storing mutable values that do not trigger re-renders (timers, previous values).</li>
                <li>Keeping references to intervals, timeouts, or external libraries.</li>
                <li>Tracking previous state or prop values.</li>
            </ul>

            <input className="input" type="text" ref={inputElem}></input>
            <button className='button' onClick={btnClick}>Click</button>
            <button className='button' onClick={() => setValue(e => e - 1)}>-1</button>
            <h1>{value}</h1>
            <button className='button' onClick={() => setValue(e => e + 1)}>+1</button>
            <h1>Render count: {count}</h1>
        </div>
    )
}
