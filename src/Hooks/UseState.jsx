import React from 'react'
import { useState } from 'react'

export default function UseState() {
    const [count, setCount] = useState(0);
    const [text, setText] = useState("");
    const [user, setUser] = useState({ name: "A", age: 20 });

    return (
        <div className='main-container'>
            <h1 className='main-heading'>Learning UseState</h1>
                <h1>Count is: {count}</h1>
                <input className="input" type='text' value={user.name} onChange={(e) => setUser((prev) => ({ ...prev, name: e.target.value }))}></input>
                <h1>{text}</h1>
                <input className='input' type='text' value={text} onChange={(e) => setText(e.target.value)}></input>
                <h1>{user.name} {"->"} {user.age}</h1>
                <button className='button' onClick={() => setCount(e => e + 1)}>Click</button>
        </div>
    )
}
