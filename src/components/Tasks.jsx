import React from 'react'
import Task from './Task'

const Tasks = ({list,removeItem,setLineThrough,lineThrough}) => {
  console.log(list);
    return (
    <div>
      {
        list.length>0 ? 
        list.map((item)=>{
          return(
              <Task data={item} removeItem={removeItem}/>
          )
        }):
        <p className='noTask'>No Tasks To Show</p> 
      }
      
    </div>
    )
  }
  

export default Tasks