import React from  'react'

const Todos = ( {todos, deleteTodo} ) =>{
    const todoList = todos.length ? (
        todos.map(todo =>{
            return(
                <div className="collection-item u-pointer" key={todo.id} onClick={() => {deleteTodo(todo.id)}}>
                    <span>{todo.content}</span>
                </div>
            )
        })
    ) : (
    <p className="center"> 沒有待辦事項 </p>
    )
    return (
    <div className="todos collection">
        {todoList}
    </div>
    )
}
export default Todos;