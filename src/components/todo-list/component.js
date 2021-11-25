import React from 'react'
import TodoItems from '../todo-items/component'


export default function todo_list(props) {
    return (
        <div className="container my-5" style={{minHeight:"60vh"}}>
            <h3 className="text-center my-3">Todo List</h3>
            {props.todos.length===0?"No todos to display":
            props.todos.map((todo)=>{
                return  <TodoItems todo={todo} key={todo.sno} onDelete={props.onDelete}/>
            })}  
        </div>
    )
}
