import React from 'react'
import Button from './Button'

const Header = ({setShow,show}) => {
  return (
    <div className='header'>
        <h1>Test Tracker</h1>
        <Button show={show} setShow={setShow}/>
    </div>
  )
}

export default Header