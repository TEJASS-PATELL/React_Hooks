import React, { useEffect, useState } from 'react'

export default function UseEffect() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const id = setTimeout(() => {
      setCount(e => e + 1)
    }, 2000);

    return () => clearTimeout(id);
  }, [count])

  return (
    <div className="main-container">
      <h1 className="main-heading">Learning useEffect - </h1>

      <p className="hook-definition">
        useEffect is a React Hook used to perform side effects in functional
        components after rendering, such as fetching data, updating the DOM,
        or setting up subscriptions.
      </p>

      <ul className="hook-listt">
        <li>Fetching data from an API when the component mounts.</li>
        <li>Running code when a state or prop value changes.</li>
        <li>Setting up and cleaning up timers or event listeners.</li>
        <li>Synchronizing component state with external systems.</li>
      </ul>

      <h1>Count is: {count}</h1>
    </div>
  )
}
