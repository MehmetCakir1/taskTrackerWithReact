import { FaTrashAlt } from "react-icons/fa";
import { useState } from "react";

const Task = ({ data,removeItem}) => {

  const [lineThrough,setLineThrough]=useState(false)

  const { task, day ,id} = data;
  if(day && task){
    return (
    <div className={!lineThrough ? "task" :" task line"} onClick={()=>setLineThrough(!lineThrough)}>
        <div  >
          <p>{task}</p>
          <p>{day}</p>
        </div>
        <div>
          <button className="trash" onClick={()=>removeItem(id)}>
            <FaTrashAlt />
          </button>
        </div>
    </div>
  )}; 
  }

export default Task;
