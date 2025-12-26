import React from 'react'

function Children({handleProps}) {
    console.log("Child Re-render")
    return (
        <div style={{display: "flex", flexDirection: "column"}}>
            <h1>Children Component</h1>
            <button className="button" onClick={handleProps}>Click</button>
        </div>
    )
}

export default React.memo(Children)