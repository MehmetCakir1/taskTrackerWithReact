import React from 'react'
import { useState,useEffect } from 'react'
import AddTask from '../components/AddTask'
import Header from '../components/Header'
import Tasks from '../components/Tasks';


const getLocalStorage = ()=>{
  let list=localStorage.getItem("list");
  if(list){
    return JSON.parse(localStorage.getItem("list"))
  }else{
    return []
  }
}

const Home = () => {
  const [show,setShow]=useState(true);
  const [list,setList]=useState(getLocalStorage())
  const [task,setTask]=useState("")
  const [day,setDay]=useState("")
  
  console.log(list);

const handleSubmit = (e)=>{
  e.preventDefault()
  setList([{id:new Date().getTime(),task:task,day:day},...list])
  setTask("")
  setDay("")
}

const removeItem = (id)=>{
  const newList=list.filter((item)=>item.id!=id)
  setList(newList)
}

useEffect(() => {
  localStorage.setItem("list",JSON.stringify(list))
}, [list])



  return (
    <div className='main'>
      <Header show={show} setShow={setShow}/>
      <AddTask show={show} handleSubmit={handleSubmit} day={day} setDay={setDay} task={task} setTask={setTask}/>
      <Tasks list={list} task={task} day={day}removeItem={removeItem}/>
    </div>
  )
}

export default Home