import { createSlice } from "@reduxjs/toolkit";
import { addTodo, deleteTodo, fetchTodos, updateTodo } from "../actions/todoActions";



const todoSlice = createSlice({
    name:"todos",
    initialState:{todos:[],error:null},
    reducers:{},
    extraReducers:(builder)=>{
        builder
        .addCase(fetchTodos.fulfilled,(state,action)=> {
            state.todos = action.payload;
            state.error = null;
        })
        .addCase(addTodo.fulfilled,(state,action)=>{
            state.todos.push(action.payload.todo);
            state.error = null;
        })
        .addCase(updateTodo.fulfilled,(state,action) =>{
            const updateTodo = action.payload.updateTodo;
            const index = state.todos.findIndex((todo)=> todo._id === updateTodo._id);
            if(index !== -1){
                state.todos[index] = updateTodo
            }
            state.error = null;
        })
        .addCase(deleteTodo.fulfilled,(state,action)=>{
            const deletedTodo = action.payload.deletedTodo;
            state.todos = state.todos.filter((todo)=>todo._id !== deletedTodo._id);
            state.error = null; 
        })
        .addMatcher(
            (action)=> action.type.endsWith("/rejected"),
            (state,action) =>{
                state.error = action.error.message;
            }
        )
    }
});

export default todoSlice.reducer;
