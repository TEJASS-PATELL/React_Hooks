import React from 'react'
import useLocalStorage from './useLocalStorage';

export default function CustomHook() {

    const [name, setName] = useLocalStorage("Value", "");

    return (
        <div className='main-container'>
            <h1 className="main-heading">Learning CustomHook - </h1>

            <p className="hook-definition">
                A Custom Hook is a reusable JavaScript function that starts with "use"
                and allows you to share logic between multiple React components.
            </p>

            <ul className="hook-list">
                <li>Reusing common logic like form handling, fetching data, or authentication.</li>
                <li>Keeping components clean by moving logic out of UI code.</li>
                <li>Sharing stateful logic without duplicating code.</li>
                <li>Improving code readability and maintainability.</li>
            </ul>

            <h2><strong>Name</strong> : {name}</h2>
            <input className='input' value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter name" />
        </div>
    )
}
