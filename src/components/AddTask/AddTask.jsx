import React, { useState } from "react";
import styles from "./addTask.module.css";

const AddTask = ({func,tasks}) => {
  // NOTE: do not delete `data-testid` key value pair
  let id;
  if(tasks.length===0){
    id=1;
  }
  else{
    id=tasks[tasks.length-1].id+1
  }
  const [text,setText]=useState({
    "id":id ,
    "text": "",
    "done": false, 
    "count": 1
  })


 


  const uptext=(value)=>{
      setText({
        ...text,
        text:value
      })
  }

  return (
    <div className={styles.todoForm}>
      <input onChange={(e)=>uptext(e.target.value)} data-testid="add-task-input" type="text" />
      <button onClick={(()=>func([...tasks,text]))} data-testid="add-task-button">+</button>
    </div>
  );
};

export default AddTask;
