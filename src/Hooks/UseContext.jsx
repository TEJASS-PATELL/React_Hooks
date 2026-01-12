import React from 'react'
import Footer from '../components/UI/Footer'

function UseContext() {
  return (
    <div className='main-container'>
      <h1 className="main-heading">Learning useContext</h1>

      <p className="hook-definition">
        useContext is a React Hook that allows components to access shared data
        directly from a Context without passing props through multiple levels.
      </p>

      <ul className="hook-list">
        <li>Sharing global data like user information, theme, or language.</li>
        <li>Avoiding prop drilling in deeply nested components.</li>
        <li>Managing app-wide configuration or settings.</li>
        <li>Consuming context values in functional components.</li>
      </ul>

      {/* <h1><ins>new tag ins</ins> hello bro <del>new tag del</del></h1> */}
      <Footer />
    </div>
  )
}

export default UseContext