import React from 'react'
import { useState } from 'react'

export default function UseState() {
    const [count, setCount] = useState(0);
    const [text, setText] = useState("");
    const [user, setUser] = useState({ name: "A", age: 20 });

    return (
        <div className='main-container'>
            <h1 className='main-heading'>Learning UseState - </h1>
            <p className="hook-definition">
                useState is a React Hook that lets you add state variables to functional components
                and update the UI when the state changes.
            </p>
            <ul className="hook-list">
                <li>Managing simple local state like counters, flags, and toggle values.</li>
                <li>Handling form inputs such as text fields, checkboxes, and select options.</li>
                <li>Controlling UI behavior like showing or hiding modals, dropdowns, or alerts.</li>
                <li>Tracking user interactions such as selected items, active tabs, or filters.</li>
            </ul>

            <h1>Count is: {count}</h1>
            <input className="input" type='text' value={user.name} onChange={(e) => setUser((prev) => ({ ...prev, name: e.target.value }))}></input>
            <h1>{text}</h1>
            <input className='input' type='text' value={text} onChange={(e) => setText(e.target.value)}></input>
            <h1>{user.name} {"->"} {user.age}</h1>
            <button className='button' onClick={() => setCount(e => e + 1)}>Click</button>
        </div>
    )
}
