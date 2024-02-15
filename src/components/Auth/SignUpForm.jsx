import React,{useState} from 'react'
import "./login.css"
import { useDispatch } from 'react-redux';
import {signup} from "../../actions/authActions"
import { useNavigate } from 'react-router-dom';

const SignUpForm = () => {
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("")
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleSubmit = (e)=>{
        e.preventDefault();
        dispatch(signup({name,email,password}))
        navigate("/login")
        console.log(name,email,password)
        setEmail("");setName("");setPassword("")
    }
    return (
        <div>

            <form className='signupform' onSubmit={handleSubmit}>
                <h1>Signup</h1>
                <input className='signupInput' type="text" placeholder='Enter Name' value={name} onChange={(e) => setName(e.target.value)} />
                <input className='signupInput' type="email" placeholder='Enter Email' value={email} onChange={(e) => setEmail(e.target.value)} />
                <input className='signupInput' type="password" placeholder='Enter Password' value={password} onChange={(e) => setPassword(e.target.value)} />
                <button className='signupInput' type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default SignUpForm
