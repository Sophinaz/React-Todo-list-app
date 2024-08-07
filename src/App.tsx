import { useState } from 'react'
import './App.css'
import Addtask from './Components/Addtask/Addtask'
import List from './Components/List/List';

interface Tasks{
  text: string
  id: number
}

var nextid = 0

function App() {
  const [tasks, setTask] = useState<Tasks[]>([]);


  const Add = (taskName: string) => {
    if (taskName){
    setTask([...tasks, {text: taskName, id: nextid}])
    nextid = nextid + 1
  } else{
    alert('Please insert a task.')
  }
}

  const Del = (task: Tasks) => {
    setTask(tasks.filter((t) => t.id !== task.id))
  }

  const Edit = (task: Tasks) => {
    const newtask = prompt("What is you new task? ")
    if (newtask){
      task.text = newtask  
    setTask(tasks.map((t) => t.id === task.id ? task : t))}
  }

  return (
    <div className='main'>
  `   <h1 className='title'>Mydo app</h1>
      <div className='container'>
        <Addtask onAdd={Add}/>
        <List tasks={tasks} edit={Edit} del={Del} />
      </div>`
      
    </div>
  )
}

export default App
