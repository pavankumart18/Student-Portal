import React, { useState } from "react"
import Axios from "axios"
import {useNavigate} from "react-router-dom"
import "./Login.css";
import { Link } from "react-router-dom";
function Login(){
    const nav=useNavigate()
    const [username,setUsername]=useState("")
    const [password,setPassword]=useState("")
    async function loginUser(e){
        e.preventDefault()
        await Axios.post("http://localhost:9000/api/student",{
            username,
            password,
        }).then((res)=>{
            if(res.data.user){
                console.log(res.data)
                const token=res.data.user
                localStorage.setItem('token',token)
                alert("login successfull")
                nav("/Dashboard")
            }else{
                alert("try again")
            }
        })
    }




    return (
        <div>
            <h1 style={{position:'relative',bottom:'250px'}}>Welcome to Student's Website</h1>
            <div class="login-box">
            <h2>Login</h2>
             <form onSubmit={loginUser}>
             <div class="user-box">
             <input 
             value={username} 
             onChange={(e)=>setUsername(e.target.value)}
             type="text" 
             name="username" />
              <label>Username</label>
              </div>
              <div class="user-box">
              <input 
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
              type="password" name="password" />
              <label>Password</label>
              <p><Link to="/registerstudent" style={{color:"white",position:'absolute',left:'85px',textDecoration:'none'}}>not yet registered?</Link></p>
              </div>
               <button class="a" style={{position:"relative",left:'100px'}}>Submit</button>
               </form>
           </div>

        </div>
    )
}

export default Login