import { useState } from 'react'
import './App.css'
import SignUpForm from './components/Auth/SignUpForm'
import LoginForm from './components/Auth/LoginForm'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import TodoList from './components/Todo/TodoList'
import TodoForm from './components/Todo/TodoForm'
import { Provider } from 'react-redux';
import store from "./store/index"

function App() {
  return (
    <>
      <Provider store={store} >
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<SignUpForm />} />
            <Route path='/login' element={<LoginForm />} />
            <Route path='/todos' element={<TodoList />} />
            <Route path='/addtodo' element={<TodoForm />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  )
}

export default App
