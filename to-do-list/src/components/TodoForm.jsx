import { useState } from "react";
function TodoForm({adding}){
    const [taskData, setTaskData] = useState("")
    const [error, showError] = useState("")

    const changeTaskData = (e) => {
        setTaskData(e.target.value);
    }

    const submitfunc = (e) => {
        e.preventDefault();
        if(taskData.trim()){
            adding(taskData.trim());
            setTaskData("");
        }else{
            showError("task cant be empty!");
        }
    }

    return( <>
                <div>
                    <form onSubmit={submitfunc}>
                        <input type="text" onChange={changeTaskData} value={taskData} placeholder="click here to enter your task" 
                            className="border-none focus:outline-none focus:border-none w-[]"></input>
                        <div>{taskData}</div>
                        <button type="submit">Add Task</button>
                        <div>{error}</div>
                    </form>
                </div>
            </>)
}
export default TodoForm;