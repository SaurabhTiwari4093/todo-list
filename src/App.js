import './App.css';
import Header from "./components/header/component";
import Footer from './components/footer/component';
import Todo_list from './components/todo-list/component';
import AddTodo from './components/addtodo/component';
import React, { useState,useEffect } from 'react';
import About from './components/aboutUs/component';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";



function App() {
  let initTodo
  if(localStorage.getItem("todos")===null){
    initTodo=[];
  }
  else{
    initTodo=JSON.parse(localStorage.getItem("todos"));
  }

  const onDelete =(todo)=>{
    //console.log("I am on delete of todo", todo);
    settodos(todos.filter((e)=>{
      return e!==todo;
    }));
    localStorage.setItem("todos",JSON.stringify(todos));
  }
  
  const addTodo =(title,desc,date,time)=>{
    //console.log("I am adding this todo",title,desc);
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
    //console.log(mytodo);
  }

  const [todos, settodos] = useState(
    initTodo
    /*[

    {
      sno:1,
      title:"Go to market",
      desc:"Go and get this thing done 1"
    },
    {
      sno:2,
      title:"Go to mall",
      desc:"Go and get this thing done 2"
    },
    {
      sno:3,
      title:"Go to school",
      desc:"Go and get this thing done 3"
    },
]*/);

useEffect(() => {
  localStorage.setItem("todos",JSON.stringify(todos));
}, [todos])

  return (
    <div>
      <Router>
      <Header/>
      <Routes>
        <Route exact path="/" element={<>
           <AddTodo addTodo={addTodo}/>
           <Todo_list todos={todos} onDelete={onDelete}/>
           </>}>
        </Route>
        <Route exact path="/about" element={
            <About />
          }>
        </Route>
      </Routes>
      <Footer/>
      </Router>
    </div>
  );
}

export default App;
