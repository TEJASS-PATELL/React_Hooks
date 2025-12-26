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
            <h1 className='main-heading'>Learning Useref</h1>
            <input className="input" type="text" ref={inputElem}></input>
            <button className='button' onClick={btnClick}>Click</button>
            <button className='button' onClick={() => setValue(e => e - 1)}>-1</button>
            <h1>{value}</h1>
            <button className='button' onClick={() => setValue(e => e + 1)}>+1</button>
            <h1>Render count: {count}</h1>
        </div>
    )
}
