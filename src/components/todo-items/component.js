import React from 'react'

export default function todo_items({todo,onDelete}) {
    return (
        <div className="my-5 bg-light p-3 rounded">
            <p><b>Todo Title: {todo.title}</b><br/>
            Todo Description: {todo.desc}<br/>
            Todo Due Date: {todo.date}<br/> 
             Todo Due Time: {todo.time}</p>
        <button type="button" class="btn btn-danger btn-sm mx-1" style={{width:"90px"}} onClick={()=>onDelete(todo)}>Delete</button>
        <button type="button" class="btn btn-warning btn-sm mx-1" style={{width:"90px"}} /*onClick={()=>onDelete(todo)}*/>Details</button>
        <button type="button" class="btn btn-success btn-sm mx-1" style={{width:"90px"}} /*onClick={()=>onDelete(todo)}*/>Completed</button>
        </div>
    )
}