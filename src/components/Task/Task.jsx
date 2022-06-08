import React from "react";
import styles from "./task.module.css";
import ClearIcon from '@mui/icons-material/Clear';
import Counter from "../Counter/Counter";
const Task = ({task,tasks,update}) => {
  // NOTE: do not delete `data-testid` key value pair
  const changetasks=()=>{
 
       for(var i=0;i<tasks.length;i++){
         if(tasks[i].id===task.id){
          let ans= [...tasks]
             ans.splice(i,1)
           
           return  update(ans)
            
             

         }
       }
  }

  const upDone=()=>{
    let ans=[...tasks]
    for(var i=0;i<ans.length;i++){
      if(ans[i].id===task.id){
           ans[i].done=!ans[i].done
            
        
        return  update(ans)
         
          

      }
    }

  }
  return (
    <li data-testid="task" className={styles.task}>
      {task.done===true ?<input  onChange={()=>upDone()} type="checkbox" data-testid="task-checkbox" checked/> :<input   onChange={()=>upDone()} type="checkbox" data-testid="task-checkbox" />}
      {task.done===true ? <div style={{textDecoration:"line-through",textAlign:"center",width:"80px"}} data-testid="task-text">{task.text}</div> :<div style={{textAlign:"center",width:"80px"}} data-testid="task-text">{task.text}</div>}
      {/* Counter here */<Counter task={task} tasks={tasks} up={update}/>}
      <button onClick={()=>changetasks()} data-testid="task-remove-button"><ClearIcon sx={{backgroundColor:"white",fontSize:10,border:"0px"}}/></button>
    </li>
  );
};

export default Task;
