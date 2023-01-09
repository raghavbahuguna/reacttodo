
import './App.css';
import Header from './MyComponents/Header';
import {Todos} from './MyComponents/Todos';
import React, { useState,useEffect } from 'react';
import {Footer} from "./MyComponents/Footer";
import {Addtodo} from "./MyComponents/Addtodo";
import {About} from "./MyComponents/About";
import {
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";

function App() {
  let initTodo;
  if(localStorage.getItem("todos")==null)
  {
    initTodo=[];
  }
  else
  {
    initTodo=JSON.parse(localStorage.getItem("todos"));
  }
  const onDelete=(todo)=>{
    console.log("Deleted",todo);
    setTodos(todos.filter((e)=>{
      return e!==todo;
    }));
    localStorage.setItem("todos",JSON.stringify(todos));
  }
  const addTodo=(title)=>{
   console.log(title);
   let sno;
   if(todos.length===0)
   {
    sno = 0;
   }
   else
   {
   sno=todos[todos.length-1].sno +1;

   }
   const myTodo={
    sno:sno,
    title:title
   }
   setTodos([...todos, myTodo]);
   
 
  }
  const [todos, setTodos] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todos",JSON.stringify(todos));
   
   },[todos]);
  
  return (
    
    <BrowserRouter>
     <Header title="My Todo List" searchbar={false}/>
     <Routes>
          <Route exact path="/" element={
            
            <>
            <Addtodo addTodo={addTodo}/>
            <Todos todos={todos} onDelete={onDelete}/>
            </>
          }>
          </Route>
          <Route exact path="/about" element={<About />}>
          </Route>
        </Routes>
     <Footer/>
    
    </BrowserRouter>
    
  );
}

export default App;
