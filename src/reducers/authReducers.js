import { createSlice } from "@reduxjs/toolkit";
import { signup, login } from "../actions/authActions";


const authSlice = createSlice({
    name: "auth",
    initialState: { user: null, token: null, error: null },
    reducers: {
        logout: (state) => {
            state.user = null
        },
        setToken:(state,action) => {
            state.token = action.payload
        },
        setError:(state,action) =>{
            state.error = action.payload
        }
    },

    extraReducers: (builder) => {
        builder
            .addCase(signup.fulfilled, (state, action) => {
                const { newuser, msg } = action.payload;
                state.user = newuser;
                state.error = msg;
            })
            .addCase(login.fulfilled, (state, action) => {
                const { user, token } = action.payload;
                state.user = user;
                state.token = token;
                state.error = null;
            })
            .addMatcher(
                (action) => action.type.endsWith("/rejected"),
                (state, action) => {
                    state.error = action.error.message;
                }
            )
    }
});

export const { logout,setToken,setError } = authSlice.actions;
export const selectToken = (state) => state.auth.token;
export default authSlice.reducer;