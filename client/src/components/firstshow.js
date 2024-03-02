import React from "react";
import Header from "./Header";
import ControlledCarousel from "./slideshow";
function FirstShow(){
    return (
        <div style={{backgroundColor:'#181D31'}}>
             <Header />
             <ControlledCarousel />
        </div>
    )
}

export default FirstShow;