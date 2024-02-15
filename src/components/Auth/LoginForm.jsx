import React, { useEffect, useState } from 'react'
import "./login.css"
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../actions/authActions';
import { useNavigate, useParams } from 'react-router-dom';
import { logout, selectToken, setToken } from '../../reducers/authReducers';

const LoginForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const {userId} = useParams()
    const isAuthenticated = useSelector((state) => state.auth.user !== null);
    const token = useSelector(selectToken);

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(login({ email, password }))
        dispatch(setToken(token))

        if (isAuthenticated) {
            navigate(`/addtodo/`)
            console.log("Token:", token);
        }
        // navigate(`/addtodo/${userId}`)
        console.log(email, password)
        setEmail(""); setPassword("")
    }
    const handleLogout = () => {
        dispatch(logout())
    }

    // useEffect(()=>{
    //     if(isAuthenticated){
    //         navigate("/addtodo")
    //         console.log("Token:", token);
    //     }
    // },[isAuthenticated,navigate,token])

    return (
        <div>

            <form onSubmit={handleSubmit}>
                <div className='loginform'>
                    <div>
                        <h1>Login</h1>
                        <p onClick={handleLogout}>logout</p>
                    </div>

                    <input className='loginInput' type="email" placeholder='Enter Email' value={email} onChange={(e) => setEmail(e.target.value)} />
                    <input className='loginInput' type="password" placeholder='Enter Password' value={password} onChange={(e) => setPassword(e.target.value)} />
                    <button className='loginInput' type='submit'>Submit</button>
                </div>
            </form>
        </div>
    )
}

export default LoginForm
