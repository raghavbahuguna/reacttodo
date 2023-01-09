import React from 'react'
import {Todoitem} from '../MyComponents/Todoitem';

export const Todos = ({todos,onDelete}) => {
  return (
    <div className='container'>
        <h3>Todo List</h3>
       
        {todos.length===0?"No todos":
        todos.map((todo)=>{
                return  <Todoitem todo={todo} key={todo.sno} onDelete={onDelete}/>
        }
        )}
       
    </div>
  )
}
