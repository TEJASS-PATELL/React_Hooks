import React, { useEffect, useLayoutEffect } from 'react'

export default function UseLayoutEffect() {

    useEffect(() => {
        console.log("Hello from Use-Effect");
    }, []);

    useLayoutEffect(() => {
        console.log("Hello from Use-Layout-Effect");
    }, []);

    return (
        <div className='main-container'>
            <h1 className='main-heading'>Learning UseLayoutEffect</h1>
            <ul>
                {Array(3000).fill(" ").map((item, index) => (
                    <li key={index}>{Math.random() ** 10}</li>
                ))}
            </ul>
        </div>
    )
}
