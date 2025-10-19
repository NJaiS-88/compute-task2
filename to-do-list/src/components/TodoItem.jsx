function TodoItem({t, complete, deletion, up, down, length, index, active}){
    return( <>
                <li>
                    <div className={`${t.completed? "line-through":""}`}>{t.task}</div>
                    <button onClick={() => complete(t.id)} className={`${t.completed? "hidden":"visible"}`}>Complete</button>
                    <button onClick={() => deletion(t.id)}>Delete</button>
                    <button onClick={() => up(t.id)} className={`${index<1 || t.completed? "hidden":"visible"}`}>up</button>
                    <button onClick={() => down(t.id)} className={`${index===length-1 || t.completed? "hidden":"visible"}`}>down</button>
                </li>
            </>)
}
export default TodoItem;