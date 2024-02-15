import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../services/api";




export const fetchTodos = createAsyncThunk("todos", async ()=> {
    const response = await api.get("/todos");
    return response.data.todos
});

export const addTodo = createAsyncThunk("todos/addtodo", async (todoData , {getState})=> {
    try {
        const {auth} = getState()
        const response = await api.post("todos/addtodo",todoData, {
            headers:{Authorization: `Bearer ${auth.token}`}
        });
        return response.data.todo; 
    } catch (error) {
        console.error("Add Todo Error:", error);
        console.log("Error Response Data:", error.response.data);
        throw error;
    }
    
})

export const updateTodo = createAsyncThunk("todos/updateTodo", async (todoData) => {
    const response = await api.put(`/updateTodo/${todoData.id}`, {task:todoData.task});
    return response.data.updateTodo;
});

export const deleteTodo = createAsyncThunk("/todos/deleteTodo", async (todoId) => {
    const response = await api.delete(`/deleteTodo/${todoId}`);
    return response.data.deletedTodo
})