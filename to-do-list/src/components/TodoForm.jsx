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
            showError("");
        }else{
            showError("task cant be empty!");
        }
    }

    return( <>
                <div>
                    <form onSubmit={submitfunc} className='w-full flex flex-col items-center justify-center'>
                        <input type="text" onChange={changeTaskData} value={taskData} placeholder="click here to enter your task" 
                            className="border-none focus:outline-none focus:border-none w-[40vw] min-w-[15rem] max-w-[30rem] text-center placeholder:text-center bg-white py-1 rounded-lg"></input>
                        <div className="w-[40vw] text-blue-500 break-words text-2xl text-bold min-w-[15rem] max-w-[30rem] text-center h-fit py-3">{taskData}</div>
                        <button type="submit" className="active:bg-blue-800 bg-blue-500 text-white p-1 rounded-lg cursor-pointer self-center hover:bg-blue-400 transition duration-150 w-fit h-fit">Add Task</button>
                        <div className=" min-w-[15rem] max-w-[30rem] text-center text-red-400 w-fit h-fit p-3 font-bold self-center px-2">{error}</div>
                    </form>
                </div>
            </>)
}
export default TodoForm;