import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Todod from './compnent/Todod'
import TodoForm from './compnent/TodoForm'
class HelloWords extends Component{
    changestatus=this.changestatus.bind(this);   
    updatetask= this.updatetask.bind(this);
    addTask= this.addTask.bind(this);
    deleteTask= this.deleteTask.bind(this);
    editTask= this.editTask.bind(this);

        state={
            tasks:[
                {
                    name:'tayyabe',
                    completed:false
                },

                {
                    name:'tayyabedf',
                    completed:false
                },
                {
                    name:'tayyabed',
                    completed:false
                },
                
            ],
            currentTask:''
        }

        deleteTask(index){
            console.log(index);
            let tasks=this.state.tasks;
            tasks.splice(index,1);
            this.setState({
                tasks
            })
            
        }
        editTask(index, newValue){
            var tasks=this.state.tasks;
            var task=tasks[index];
            task['name']=newValue;
            this.setState({
                tasks
            })

        }
        addTask(avt){
            avt.preventDefault();
            let tasks=this.state.tasks;
            let currentTask= this.state.currentTask;
            tasks.push({
            
                name:currentTask,
                completed:false
            })
            this.setState({
                tasks:tasks,
                currentTask:''
            })
            

        }
        
    changestatus(index){
    var tasks=this.state.tasks;
    var task=tasks[index];
    task.completed=!task.completed;
    this.setState({
      tasks:tasks
    })
    }
    updatetask(newtask){
      this.setState({
          currentTask:newtask.target.value
      })
    }

      render(){
          
          return(
             <section>
                 <TodoForm  addTask={this.addTask}
                 updatetask={this.updatetask} 
                 currentTask={this.state.currentTask}
                 />

              <ul>
                  {this.state.tasks.map((task,index)=>{
                   return  <Todod
                    key={index} 
                   changestatus={this.changestatus} 
                   index={index}
                    detail={task} 
                    deleteTask={this.deleteTask}
                    editTask={this.editTask}
                    />
                  })}
             
             </ul>
             </section>
          )
      }
    }
  
  
ReactDOM.render(<HelloWords />, document.getElementById('root'));


