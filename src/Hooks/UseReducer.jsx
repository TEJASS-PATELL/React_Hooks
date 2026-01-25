import React, { useReducer } from 'react';

const initialState = { count: 0 };

const reducer = (state, action) => {
    switch (action.type) {
        case "INCREMENT":
            return { count: state.count + 1 };

        case "DECREMENT":
            return { count: state.count - 1 };

        case "RESET":
            return { count: 0 };

        default:
            return state;
    }
};

function UseReducer() {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <div className='main-container'>
            <h1 className="main-heading">Learning useReducer -</h1>

            <p className="hook-definition">
                useReducer is a React Hook used for managing complex state logic by
                centralizing state updates in a reducer function based on actions.
            </p>

            <ul className="hook-list">
                <li>Managing complex state with multiple related values.</li>
                <li>Handling state transitions using explicit actions.</li>
                <li>Replacing useState when state update logic becomes hard to manage.</li>
                <li>Working with predictable and testable state updates.</li>
            </ul>

            <h1> Count: {state.count} </h1>

            <div style={{ display: "flex", justifyContent: "center", gap: "12px", }}>
                <button className='button' onClick={() => dispatch({ type: "INCREMENT" })}>INC</button>

                <button className='button' onClick={() => dispatch({ type: "DECREMENT" })}>DEC</button>

                <button className='button' onClick={() => dispatch({ type: "RESET" })}>Reset</button>
            </div>
        </div>
    );
}

export default UseReducer;
