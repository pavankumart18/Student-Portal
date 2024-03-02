import React from "react";
import FirstShow from "./firstshow";
import SecondShow from "./secondshow";
import Thirdshow from "./thirdshow";


function FinalShow(props){
    return (
        <div>
             <FirstShow />
             <SecondShow name={props.name}/>
             <Thirdshow />
        </div>
    )
}

export default FinalShow;