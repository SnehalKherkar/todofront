import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../services/api";
import {setToken,setError} from "../reducers/authReducers"



export const signup = createAsyncThunk("user", async ({ name, email, password }) => {
    const response = await api.post("user", { name, email, password });
    return response.data;
})

export const login = createAsyncThunk("user/login", async ({ email, password }, { dispatch }) => {
    try {
        const response = await api.post("user/login", { email, password });
        const { user, token } = response.data

        // dispatch(setUser(user))
        dispatch(setToken(token))
// Store the token in local storage for persistence
        localStorage.setItem("token", token)
        return { user, token }
    } catch (error) {
        dispatch(setError(error.message));
        throw error;
    }

})