import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../reducers/authReducers";
import todoReducer from "../reducers/todoReducers";



const store = configureStore({
    reducer :{
        auth:authReducer,
        todos:todoReducer
    }
});

export default store;