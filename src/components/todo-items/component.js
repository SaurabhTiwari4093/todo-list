import React from 'react'

export default function todo_items({todo,onDelete}) {
    return ( <div className="my-5 bg-light p-3 rounded">
    <div><b>Todo Title: {todo.title}</b>
    <span className="float-end">
    <input className="form-check-input mx-1" type="checkbox" value="" id="flexCheckDefault"/>
    <label className="form-check-label" for="flexCheckDefault">
    Completed
  </label></span>
    </div>
    <div className="my-3">
    <button className="btn btn-success btn-sm" type="button" data-bs-toggle="collapse" data-bs-target={"#example"+todo.sno} aria-expanded="false" aria-controls={"example"+todo.sno}>Details</button>
    <button type="button" className="btn btn-danger btn-sm mx-3" onClick={()=>onDelete(todo)}>Delete</button>
    </div>  
    <div className="collapse multi-collapse" id={"example"+todo.sno}>
      <div className="card card-body">
        Todo Description: {todo.desc}<br/>
        Todo Due Date: {todo.date}<br/> 
        Todo Due Time: {todo.time}
      </div>
    </div>
</div>
    )
}