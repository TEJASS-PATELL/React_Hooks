import React from 'react'
import useLocalStorage from './useLocalStorage';

export default function CustomHook() {

    const [name, setName] = useLocalStorage("Value", "");

    return (
        <div className='main-container'>
            <h1 className='main-heading'>Learning CustomeHook - </h1>
            <h2><strong>Name</strong> : {name}</h2>
            <input className='input' value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter name"/>
        </div>
    )
}
