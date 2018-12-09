import React from 'react';
const TodoForm =(props)=>{
    return(
       <form onSubmit={props.addTask}> 
           <input type='text' 
           value={props.currentTask}
           onChange={props.updatetask}
           />
           <button type="submit">Submit</button>
       </form>
    )
}
export default TodoForm