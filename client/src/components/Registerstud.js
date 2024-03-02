import React, { useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Login.css';
import {useNavigate} from "react-router-dom";
import axios from "axios";
function Student(props){
  const nav=useNavigate();
    const [username,setUserName]=useState("");
    const [password,setPassword]=useState("");
    const [name,setName]=useState("");
    const [rollno,setRollno]=useState("");
    const [phoneno,setPhone]=useState("");
    const [branch,setBranch]=useState("");
    const submitReview=async (e)=>
    {
      e.preventDefault();
      await axios.post("http://localhost:9000/api/registerstudent",{
            name,
            rollno,
            phoneno,
            branch,
            username,
            password,
        }).then((res)=>{
          if(res.data){
            alert("thanks for registering")
            nav("/")
          }
        })
    };

    return (
        <div class="container">
           <div class="login-box" style={{height:'600px'}}>
    <h2>Register to SW</h2>
    <form onSubmit={submitReview}>
    <div class="user-box">
        <input type="text" value={name} name="name" onChange={(e)=>{
          setName(e.target.value);
        }} 
        required />
        <label>Name</label>
      </div>
      <div class="user-box">
        <input type="text" value={rollno} name="rollno" onChange={(e)=>{
          setRollno(e.target.value);
        }} 
        required />
        <label>Roll no:</label>
      </div>
      <div class="user-box">
        <input type="text" value={branch} name="branch" onChange={(e)=>{
          setBranch(e.target.value);
        }} 
        required />
        <label>Branch</label>
      </div>
      <div class="user-box">
        <input type="text" value={phoneno} name="phoneno" onChange={(e)=>{
          setPhone(e.target.value);
        }} 
        required />
        <label>Phone Number</label>
      </div>
      <div class="user-box">
        <input type="text" value={username} name="username" onChange={(e)=>{
          setUserName(e.target.value);
        }} 
        required />
        <label>Username</label>
      </div>
      <div class="user-box">
        <input value={password} type="password" name="password" 
        onChange={(e)=>{
          setPassword(e.target.value);
        }}
        required="" />
        <label>Password</label>
      </div>
      <button class="a" style={{position:'relative',bottom:'55px',left:'100px'}}>Submit</button>
    </form>
  </div>
        </div>
    )
}

export default Student;