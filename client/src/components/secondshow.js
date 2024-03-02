import React from "react";
import TimeTable from "./timetable";
import KitchenSinkExample from "./personalinfo";
function SecondShow(props){
    return (
        <div style={{marginBottom:"100px",backgroundColor:'#181D31'}}>
             
             <div className="row">
                   <div className="col-9"><h1 style={{color:"#FFFBF5",paddingTop:'20px'}}>Time Table</h1><TimeTable /></div>
                   <div className="col-2"><h3 style={{color:"#FFFBF5"}}>Personal Information</h3><KitchenSinkExample name={props.name}/></div>
             </div>
        </div>
    )
}

export default SecondShow;