import React from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import  {useState} from 'react'
import AddTask from './components/AddTask'


const App = () => {
  const [showAddTask, setShowAddTask]=useState(false)
  const [tasks, setTasks]=useState([
    {
    id:1,
    text:'Doctors appointment',
    day:'Feb 5th 2022',
    reminder:true,
   },{
    id:2,
    text:'Office appointment',
    day:'Feb 5th 2022',
    reminder:true,

   },
   {
    id:3,
    text:'nurse appointment',
    day:'Feb 5th 2022',
    reminder:true,

    }
])
//Add Task
const addTask=(task)=>{ 

  console.log(task)
  const id=Math.floor(Math.random() * 10000) +1
  const newTask={id, ...task}
  setTasks([...tasks, newTask])
}


//Delete Task

const deleteTask=(id)=>{ 
setTasks(tasks.filter((task)=>task.id!=id))
 }

//ToggleReminder
const ToggleReminder=(id)=>{ 
setTasks(tasks.map((task)=>task.id=id? {...task, reminder:!task.reminder} : task))
}


   return (
    <div className='container'>
      <Header onAdd={()=>setShowAddTask(!showAddTask) }  showAdd={showAddTask }
/> 
      {showAddTask  && <AddTask onAdd= {addTask}/>}
      {tasks.length>0? <Tasks tasks={tasks} onToggle={ToggleReminder}
       onDelete={deleteTask}/>:'No tasks found' }
     
    </div>
  )
}

export default App