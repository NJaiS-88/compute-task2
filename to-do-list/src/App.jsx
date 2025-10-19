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

  const [active, setActive] = useState(false);
  const [all, setAll] = useState(true);
  const [completed, setCompleted] = useState(false);

  useEffect(() => {
    localStorage.setItem("task", JSON.stringify(task))
    const saved = localStorage.getItem("task");
    const a = saved ? JSON.parse(saved) : [];
    const maxId = a.length ? Math.max(...a.map(t => t.id)) : 0;
    setId(maxId+1)
    
  }, [task]);

  const adding = (a) => {
    const obj = {"id":id, "task":a, "completed": false}
    setTask([obj,... task])
    setId(i => i+=1);
  };

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
  };

  const deletion = (a) => {
    const newList = task.filter(t => t.id !== a);
    setTask(newList);
  };

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

  let filteredTasks = [... task];

  if(active){
    filteredTasks = task.filter(t => !t.completed);
  }else if (completed){
    filteredTasks = task.filter(t => t.completed);
  }

  return (
    <div className="max-w-[100vw] h-[100vh] overflow-hidden relative bg-blue-500">
      <div className="md:text-[4vw] sm:text-[2rem] text-[1rem] font-bold md:top-[1%] sm:top-[4%] top-[5%] text-white absolute left-1/2 transform -translate-x-1/2">TO DO LIST</div>
      <div className="flex w-fit h-fit gap-x-3.5 absolute top-[12%] left-1/2 transform -translate-x-1/2">
        <div onClick={() => {setAll(true), setActive(false), setCompleted(false)}} className={`md:text-[1.5vw] text-[1rem] p-2 rounded-lg cursor-pointer hover:border-2  hover:border-blue-100 transition duration-150 ${all? "bg-blue-200 border-2 border-blue-100 text-black":"border-2 border-blue-400 text-white"}`}>All</div>
        <div onClick={() => {setAll(false), setActive(true), setCompleted(false)}} className={`md:text-[1.5vw] text-[1rem] p-2 rounded-lg cursor-pointer hover:border-2  hover:border-blue-100 transition duration-150 ${active? "bg-blue-200 border-2 border-blue-100 text-black":"border-2 border-blue-400 text-white"}`}>Active</div>
        <div onClick={() => {setAll(false), setActive(false), setCompleted(true)}} className={`md:text-[1.5vw] text-[1rem] p-2 rounded-lg cursor-pointer hover:border-2  hover:border-blue-100 transition duration-150 ${completed? "bg-blue-200 border-2 border-blue-100 text-black":"border-2 border-blue-400 text-white"}`}>Completed</div>
      </div>
      <div className="h-[80vh] w-[100vw] rounded-tl-[3vw] rounded-tr-[3vw] absolute bottom-0 bg-gray-200"></div>
      <div className="w-[70vw] h-fit flex flex-col items-center justify-center top-[25%] absolute left-1/2 transform -translate-x-1/2">
        <TodoForm adding={adding}></TodoForm>
        <TodoList task={filteredTasks} complete={complete} deletion={deletion} up={up} down={down} length={length}></TodoList>
      </div>
    </div>
  )
}

export default App
