import { MdDeleteForever } from "react-icons/md";
import { FaCheckCircle } from "react-icons/fa";
import { FaArrowUp } from "react-icons/fa";
import { FaArrowDown } from "react-icons/fa6";
function TodoItem({t, complete, deletion, up, down, length, index, active}){
    return( <>
                <li>
                    <div className={`md:w-[30rem] w-[40vw]  my-4 py-3 shadow-sm justify-between ${t.completed? "bg-blue-50":"bg-white"} px-3 rounded-lg h-fit flex flex-row flex-wrap"`}>
                        <div className={`md:w-[40%] w-[100%] break-words px-4 h-fit ${t.completed? "line-through":""}`}>{t.task}</div>
                        <div className="">
                            <button onClick={() => complete(t.id)} className={`active:bg-blue-100 hover:bg-blue-500 text-white rounded-lg text-xl w-fit h-fit p-1 bg-blue-300 cursor-pointer mx-1 ${t.completed? "hidden":"visible"}`}><FaCheckCircle></FaCheckCircle></button>
                            <button onClick={() => deletion(t.id)}className=" active:bg-blue-100 hover:bg-blue-500 text-white rounded-lg text-xl w-fit h-fit p-1 bg-blue-300 mx-1 cursor-pointer"><MdDeleteForever></MdDeleteForever></button>
                            <button onClick={() => up(t.id)} className={`active:bg-blue-100 hover:bg-blue-500 text-white rounded-lg text-xl w-fit h-fit p-1 bg-blue-300 mx-1 cursor-pointer ${index<1 || t.completed? "hidden":"visible"}`}><FaArrowUp></FaArrowUp></button>
                            <button onClick={() => down(t.id)} className={`active:bg-blue-100 hover:bg-blue-500 text-white rounded-lg text-xl w-fit h-fit p-1 bg-blue-300 mx-1 cursor-pointer ${index===length-1 || t.completed? "hidden":"visible"}`}><FaArrowDown></FaArrowDown></button>    
                        </div>                 
                    </div>
                </li>
            </>)
}
export default TodoItem;