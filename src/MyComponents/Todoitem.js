import React from 'react'

export const Todoitem = ({todo,onDelete}) => {
  return (
    <div className='my-3'><h4>{todo.title}</h4>
    <button className='btn btn-sm btn-danger my-2' onClick={()=>{onDelete(todo)}}>Delete</button></div>
    //function on deleted passed in arrow function instead of call
  )
}
