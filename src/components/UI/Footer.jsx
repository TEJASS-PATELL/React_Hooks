import React, { useContext } from 'react'
import { AppContext } from '../../context/AppContext'

function Footer() {
    const {phone, name} = useContext(AppContext);
  return (
    <div className='main-container'>
        <h1>Footer</h1>
        <h2>Name: {name}</h2>
        <h3>Phone-No: {phone}</h3>
    </div>
  )
}

export default Footer