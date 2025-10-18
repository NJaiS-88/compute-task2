import { useState } from "react"
import TodoForm from "./components/TodoForm"
function App() {
  const [id, setId] = useState(1);
  const [task, setTask] =useState([]);

  const adding = (a) => {
    const obj = {"id": id, "task":task, "completed": false}
  }
  return (
    <>
      <TodoForm></TodoForm>
    </>
  )
}

export default App
