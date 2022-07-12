

const AddTask = ({show,handleSubmit,setDay,setTask,day,task}) => {
  return (
    <div className="addTask">
      <form onSubmit={handleSubmit} className="form" style={!show ? { display:"none"}: { display:"block"} }>
        <div className="taskInput">
          <label htmlFor="task">Task</label> 
          <input 
          type="text" 
          id="task" 
          name="task" 
          placeholder="Add Task"
          value={task} 
          onChange={(e)=>setTask(e.target.value)}
          required
          />
        </div>
        <div className="dateInput">
          <label htmlFor="dayTime">Day & Time</label>
          <input 
          type="date" 
          id="dayTime" 
          name="dayTime"
          value={day}
          onChange={(e)=>setDay(e.target.value)}
          required
          />
        </div>
        <div className="btnDiv"><button type="submit">Save Task</button></div> 
      </form>
    </div>
  );
};

export default AddTask;
