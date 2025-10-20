import TodoItem from "./TodoItem";

function TodoList({task, complete, deletion, up, down, length, edit, editing, editText, completeEdit, setEditText}){
    return( <>
                <ul>
                    {
                        task.length===0?(
                            <div className="text-gray-400 text-3xl font-bold">no tasks here</div>
                        ):(
                        task.map((t,index) => (
                            <TodoItem key={t.id} setEditText={setEditText}  t={t} editing={editing} editText={editText} completeEdit={completeEdit} complete={complete} deletion={deletion} edit={edit} up={up} down={down} length={length} index={index}>
                            </TodoItem>
                        )))
                    }
                </ul>
            </>);
}
export default TodoList;