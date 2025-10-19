import TodoItem from "./TodoItem";

function TodoList({task, complete, deletion, up, down}){
    return( <>
                <ul>
                    {
                        task.map(t => (
                            <TodoItem key={t.id} t={t} complete={complete} deletion={deletion} up={up} down={down}>
                            </TodoItem>
                        ))
                    }
                </ul>
            </>);
}
export default TodoList;