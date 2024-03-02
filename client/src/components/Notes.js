import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import notes from "./notes.png";
import {Link,useNavigate} from "react-router-dom";
function Notes(){
    const nav=useNavigate()
    return (
        <div style={{textAlign:"center"}}>
            <h1 style={{textAlign:"center",color:"#FFFBF5"}}>Notes Section</h1>
            <div className="row" style={{testAlign:'center',position:'relative',left:'50px'}}>
                <div className="col-lg-4" style={{testAlign:'center'}}>
            <div class="card text-center mb-3" style={{width: "18rem"}}>
            <div class="card-body">
            <h5 class="card-title">TODAY'S NOTES</h5>
            <img style={{width:"150px",height:"150px",borderRadius:"100%"}}src={notes} alt="First slide" />
            <p class="card-text">Enter to upload or download notes</p>
            <Link to="/todaysnotes" class="btn btn-primary">Click Here</Link>
            </div>
            </div>
            </div>
            <div className="col-lg-4" style={{testAlign:'center'}}>
            <div class="card text-center mb-3" style={{width: "18rem"}}>
            <div class="card-body">
            <h5 class="card-title">WEEK NOTES</h5>
            <img style={{width:"150px",height:"150px",borderRadius:"100%"}}src={notes} alt="First slide" />
            <p class="card-text">Enter to upload or download notes</p>
            <a href="#home" class="btn btn-primary" onClick={()=>{nav('/downloadnotes')}}>Click Here</a>
            </div>
            </div>
            </div>
            <div className="col-lg-4" style={{testAlign:'center'}}>
            <div class="card text-center mb-3" style={{width: "18rem"}}>
            <div class="card-body">
            <h5 class="card-title">PREVIOUS SEM NOTES</h5>
            <img style={{width:"150px",height:"150px",borderRadius:"100%"}}src={notes} alt="First slide" />
            <p class="card-text">Enter to upload or download notes</p>
            <a href="#home" class="btn btn-primary" onClick={()=>{nav('/semnotes')}}>Click Here</a>
            </div>
            </div>
            </div>
            </div>
        </div>
    )
}

export default Notes;