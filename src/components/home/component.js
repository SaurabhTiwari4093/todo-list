import Todo_list from "../todo-list/component";
import AddTodo from '../addtodo/component';
import React, { useState,useEffect } from "react";

export default function Home() {
  let initTodo
  if(localStorage.getItem("todos")===null){
    initTodo=[];
  }
  else{
    initTodo=JSON.parse(localStorage.getItem("todos"));
  }

  const onDelete =(todo)=>{
    settodos(todos.filter((e)=>{
      return e!==todo;
    }));
    localStorage.setItem("todos",JSON.stringify(todos));
  }

  const addTodo =(title,desc,date,time)=>{
    let sno;
    if(todos.length==0){
      sno=0;
    }
    else{
       sno= todos[todos.length-1].sno+1;
    }
    const mytodo={
      sno:sno,
      title:title,
      desc:desc,
      date:date,
      time:time,
    }
    settodos([...todos,mytodo]);
  }

const [todos, settodos] = useState(initTodo);

useEffect(() => {
  localStorage.setItem("todos",JSON.stringify(todos));
}, [todos])

    return (
        <div>
           <AddTodo addTodo={addTodo}/>
           <Todo_list todos={todos} onDelete={onDelete}/>
        </div>
    )
}
