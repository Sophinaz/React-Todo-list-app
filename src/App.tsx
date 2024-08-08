import { useState } from 'react'
import './App.css'
import Addtask from './Components/Addtask/Addtask'
import List from './Components/List/List';

interface Tasks{
  text: string
  id: number
  isEditing: boolean
}

var nextid = 0

function App() {
  const [tasks, setTask] = useState<Tasks[]>([]);


  const Add = (taskName: string) => {
    if (taskName){
    setTask([...tasks, {text: taskName, id: nextid, isEditing: false}])
    nextid = nextid + 1
    
  } else{
    alert('Please insert a task.')
  }
}

  const Del = (task: Tasks) => {
    setTask(tasks.filter((t) => t.id !== task.id))
  }

  const toggle = (task:Tasks) => {
    task.isEditing = !task.isEditing
    console.log(task, task.isEditing)
    setTask(tasks.map((t) => t.id === task.id ? task : t))}
  

  const Edit = (task: Tasks) => {
    if (task){
      console.log(task)
    setTask(tasks.map((t) => t.id === task.id ? task : t))}
    task.isEditing = false
  }

  return (
    <div className='main'>
  `   <h1 className='title'>Mydo app</h1>
      <div className='container'>
        <Addtask onAdd={Add}/>
        <List tasks={tasks} toggle={toggle} del={Del} edit={Edit} />
      </div>`    
    </div>
  )
}

export default App
