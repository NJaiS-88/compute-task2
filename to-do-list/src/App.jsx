import { useState, useEffect } from "react";
import TodoForm from "./components/TodoForm";
function App() {
  const [id, setId] = useState(1);
  const [task, setTask] =useState([]);

  useEffect(() => {
    localStorage.setItem("task", JSON.stringify(task))
  }, [task]) 

  const adding = (a) => {
    const obj = {"id": id, "task":task, "completed": false}
    setTask([... task, setTask])
    setId(i => i+=1);
  }

  const complete = () => {

  }

  const delete = () => {

  }
  return (
    <>
      <TodoForm></TodoForm>
    </>
  )
}

export default App
