import React from "react";
import "./clubs.css"
import ewb from "./cbitewb.jpeg";
import ri from "./ri.jpeg";
import mun from "./mun.jpeg"
function Clubs(){
    return (
        <div>
            <div style={{margin:'50px'}}>
            <h1 style={{color:"white",display:'inline-block'}}>Club Events</h1>
            <button type="button" class="btn btn-light" style={{float:'right',position:'relative',right:'60px',marginLeft:'10px'}}>Add Events</button>
            <button type="button" class="btn btn-light" style={{float:'right',position:'relative',right:'60px'}}>More Club Events</button>

            </div>
            
        <div className="row" style={{textAlign:"center"}}>
            <div className="col-lg-4">
        <div class="a-box">
        <div class="img-container">
        <div class="img-inner">
         <div class="inner-skew">
         <img src={ewb} alt="ewb" />
        </div>
        </div>
        </div>
        <div class="text-container">
        <h3>EWB CBIT</h3>
         <div>
     the club is going to plan some events regarding sruthi so please come asap
  </div>
</div>
        </div>
        </div>
        <div className="col-lg-4">
        <div class="a-box">
        <div class="img-container">
        <div class="img-inner">
         <div class="inner-skew">
         <img src={ri} alt="ri" />
        </div>
        </div>
        </div>
        <div class="text-container">
        <h3>R & I CBIT</h3>
         <div>
     the club is going to plan some events regarding sruthi so please come asap
  </div>
</div>
        </div>
        </div>
        <div className="col-lg-4">
        <div class="a-box">
        <div class="img-container">
        <div class="img-inner">
         <div class="inner-skew">
         <img src={mun} alt="mun" />
        </div>
        </div>
        </div>
        <div class="text-container">
        <h3>Chaya CBIT</h3>
         <div>
     the club is going to plan some events regarding sruthi so please come asap
  </div>
</div>
        </div>
        </div>
        </div>
        </div>
    )
}

export default Clubs;