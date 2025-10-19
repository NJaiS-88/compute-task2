import { useState, useEffect } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
function App() {
  const [id, setId] = useState(() => {
    if(localStorage.getItem("task")){
      const a = JSON.parse(localStorage.getItem("task"))
      return a[a.length-1] ? a[a.length-1].id+1:1
    }else{
      return 1;
    }
  });
  const [task, setTask] =useState(() => {
    return localStorage.getItem("task") ? JSON.parse(localStorage.getItem("task")) : []
  });

  useEffect(() => {
    localStorage.setItem("task", JSON.stringify(task))
  }, [task]) 

  const adding = (a) => {
    const obj = {"id":id, "task":a, "completed": false}
    setTask([... task, obj])
    setId(i => i+=1);
  }

  const complete = () => {

  }

  const deletion = () => {

  }

  const up = () => {

  }

  const down = () => {

  }

  return (
    <>
      <TodoForm adding={adding}></TodoForm>
      <TodoList task={task} complete={complete} deletion={deletion} up={up} down={down}></TodoList>
    </>
  )
}

export default App
