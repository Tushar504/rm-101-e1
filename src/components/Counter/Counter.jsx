import React from "react";
import styles from "./counter.module.css";

const Counter = ({task,tasks,up}) => {
  // sample value to be replaced
  let count = task.count;
  // NOTE: do not delete `data-testid` key value pair
  const updatingC=(value)=>{
    let ans=[...tasks]
       for(var j=0;j<ans.length;j++){
         if(ans[j].id===task.id){
           if(ans[j].count>0){
                ans[j].count+=value
           }
               
                break;

         }
       }

       return up(ans)
  }
  return (
    <div className={styles.counter}>
      <button onClick={()=>updatingC(1)} data-testid="task-counter-increment-button">+</button>
      <span data-testid="task-counter-value">{count}</span>
      <button onClick={()=>updatingC(-1)} data-testid="task-counter-decrement-button">-</button>
    </div>
  );
};

export default Counter;
