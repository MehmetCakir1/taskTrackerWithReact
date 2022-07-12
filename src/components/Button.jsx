import React from 'react'

const Button = ({setShow,show}) => {
    
  return (
    <div>
        <button onClick={()=>setShow(!show)}>{show ? "Close Add Task Bar" : "Show Add Task Bar"}</button>
    </div>
  )
}

export default Button