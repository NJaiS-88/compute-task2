import TodoItem from "./TodoItem";

function TodoList({task, complete, deletion, up, down, length}){
    return( <>
                <ul>
                    {
                        task.map((t,index) => (
                            <TodoItem key={t.id} t={t} complete={complete} deletion={deletion} up={up} down={down} length={length} index={index}>
                            </TodoItem>
                        ))
                    }
                </ul>
            </>);
}
export default TodoList;