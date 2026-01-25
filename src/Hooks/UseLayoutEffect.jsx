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
            <h1 className="main-heading">Learning useLayoutEffect</h1>

            <p className="hook-definition">
                useLayoutEffect is a React Hook that runs synchronously after all DOM
                mutations but before the browser paints, allowing you to read layout
                and make DOM changes without visual flicker.
            </p>

            <ul className="hook-listt">
                <li>Measuring DOM elements (width, height, position) before paint.</li>
                <li>Synchronously updating the DOM to avoid layout flicker.</li>
                <li>Working with animations that depend on layout calculations.</li>
                <li>Replacing useEffect when immediate DOM updates are required.</li>
            </ul>

            <ul>
                {Array(3000).fill(" ").map((item, index) => (
                    <li key={index}>{Math.random() ** 10}</li>
                ))}
            </ul>
        </div>
    )
}
