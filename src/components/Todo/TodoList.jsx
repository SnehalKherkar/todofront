import React, { useEffect } from 'react'
import "./todo.css"
import { useDispatch, useSelector } from 'react-redux'
import {fetchTodos,deleteTodo} from "../../actions/todoActions"

const TodoList = () => {
  const dispatch = useDispatch()
  const {todos,error} = useSelector((state)=>state.todos);

  useEffect(()=>{
    dispatch(fetchTodos())
  },[dispatch]);


  const handleDelete = (todoId)=>{
dispatch(deleteTodo(todoId))
  }

  return (
    <div>
      <h1>Todo-List</h1>
      {error && <p style={{color:"red"}}>{error}</p>}
      <ul>
        {todos.map((todo)=>(
          <li key={todo._id}>
            {todo.task}
            <button onClick={()=>handleDelete(todo._id)}>Delete</button> 
          </li>
        ))}
      </ul>
    </div>
  )
}

export default TodoList
