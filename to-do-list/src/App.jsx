import { useState, useEffect } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
function App() {
  const [id, setId] = useState(() => {
    const saved = localStorage.getItem("task");
    const a = saved ? JSON.parse(saved) : [];
    const maxId = a.length ? Math.max(...a.map(t => t.id)) : 0;
    return maxId + 1;
  });

  const [task, setTask] =useState(() => {
    return localStorage.getItem("task") ? JSON.parse(localStorage.getItem("task")) : []
  });

  const length = task.length;

  useEffect(() => {
    localStorage.setItem("task", JSON.stringify(task))
    const saved = localStorage.getItem("task");
    const a = saved ? JSON.parse(saved) : [];
    const maxId = a.length ? Math.max(...a.map(t => t.id)) : 0;
    setId(maxId+1)
    
  }, [task]) 

  const adding = (a) => {
    const obj = {"id":id, "task":a, "completed": false}
    setTask([obj,... task])
    setId(i => i+=1);
  }

  const complete = (a) => {
    const newlist = task.map(t => {
      if(t.id===a){
        t.completed = !t.completed;
      }
      return t;
    })
    const i = newlist.findIndex(f => f.id===a);
    const b = newlist.splice(i,1)[0];
    newlist.push(b);
    setTask(newlist);
  }

  const deletion = (a) => {
    const newList = task.filter(t => t.id !== a);
    setTask(newList);
  }

  const up = (a) => {
    const i = task.findIndex(t => t.id===a);
    if(i>0){
      const newlist = [...task];
      let b = newlist[i];
      newlist[i]=newlist[i-1];
      newlist[i-1]=b;
      setTask(newlist);
    }
  }

  const down = (a) => {
    const i = task.findIndex(t => t.id===a);
    if(i<length-1){
      const newlist = [...task];
      let b = newlist[i+1];
      newlist[i+1]=newlist[i];
      newlist[i]=b;
      setTask(newlist);
    }
  }

  return (
    <>
      <TodoForm adding={adding}></TodoForm>
      <TodoList task={task} complete={complete} deletion={deletion} up={up} down={down} length={length}></TodoList>
    </>
  )
}

export default App
