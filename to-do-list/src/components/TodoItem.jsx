function TodoItem({t, complete, deletion, up, down, length, index, active}){
    return( <>
                <li>
                    <div className="md:w-[30rem] w-[40vw]  my-4 py-3 shadow-sm justify-between  bg-white px-3 rounded-lg h-fit flex flex-row flex-wrap">
                        <div className={`md:w-[40%] w-[100%] break-words px-4 h-fit ${t.completed? "line-through":""}`}>{t.task}</div>
                        <div className="">
                            <button onClick={() => complete(t.id)} className={` text-white rounded-lg w-fit h-fit p-1 bg-blue-300 cursor-pointer mx-1 ${t.completed? "hidden":"visible"}`}>Complete</button>
                            <button onClick={() => deletion(t.id)}className="text-white rounded-lg w-fit h-fit p-1 bg-blue-300 mx-1 cursor-pointer">Delete</button>
                            <button onClick={() => up(t.id)} className={`text-white rounded-lg w-fit h-fit p-1 bg-blue-300 mx-1 cursor-pointer ${index<1 || t.completed? "hidden":"visible"}`}>up</button>
                            <button onClick={() => down(t.id)} className={`text-white rounded-lg w-fit h-fit p-1 bg-blue-300 mx-1 cursor-pointer ${index===length-1 || t.completed? "hidden":"visible"}`}>down</button>
                        </div>                 
                    </div>
                </li>
            </>)
}
export default TodoItem;