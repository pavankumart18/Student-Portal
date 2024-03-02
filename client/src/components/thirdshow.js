import React from "react";
import Attendance from "./Attendance";
import Clubs from "./clubs";
import Notes from "./Notes";

function Thirdshow(){
    return (
        <div style={{backgroundColor:'#181D31'}}>
             <Notes />
             <Attendance />
             <Clubs />
        </div>
    )
}

export default Thirdshow