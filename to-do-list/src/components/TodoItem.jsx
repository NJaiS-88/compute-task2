function TodoItem({t, complete, deletion, up, down}){
    return( <>
                <li>
                    <div>{t.task}</div>
                    <button onClick={() => complete(t.id)}>Complete</button>
                    <button>Delete</button>
                    <button>up</button>
                    <button>down</button>
                </li>
            </>)
}
export default TodoItem;