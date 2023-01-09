import React,{useState} from 'react'

export const Addtodo = (props) => {
    const [title,setTitle]=useState("");  
    const submit=(e)=>
    {
        e.preventDefault();
        if(!title)
        {
            alert("enter title");
        }
        else{
        props.addTodo(title);
        setTitle("");
        }
        
    }
  return (
    <div className='container'>
        <form onSubmit={submit}>
  <div className="form-group py-5 px-5">
    <label htmlFor="exampleInputEmail1">Title</label>
    <input type="title" className="form-control" value={title} onChange={(e)=>setTitle(e.target.value)} placeholder="Enter Title"/>
    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
    </div>
  )
}
