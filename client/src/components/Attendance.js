import React,{useState} from "react";
import "./Attendance.css"
import att from "./attendance.jpg";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
function Attendance(){
    const [percentage, setPercentage] = useState(25);
    return (
        <div class="container">
            <h1 style={{textAlign:"center",color:"#FFFBF5",marginRight:"20px"}}>Attendance Section</h1>
  <div class="card">
    <div class="imgBx">
      <img style={{borderRadius:"100%"}}src={att} alt="hi" />
    </div>
    <div class="contentBx">
      <h2>Attendance</h2>
      <div class="size">
        <h2>75 %</h2>
      </div>
    </div>
  </div>
</div>
    
    )
}

export default Attendance;