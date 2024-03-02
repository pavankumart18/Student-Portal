import React,{useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import notes from "./notes.png";
import './Days.js'
import Days from "./Days.js";
import axios from "axios";
import {Link, useNavigate} from "react-router-dom";
function TodaysNotes(){
    const nav=useNavigate()
    var now =new Date();
    var days=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    var day=days[now.getDay()];
    const i=days.indexOf(day);
    const a=Days[i-1];
    const [file, setFile] = useState(null);
    const [subject,setSubject]=useState('');
    const [errormsg,setErrorMsg]=useState('');
    const date = now.getFullYear() + '-' + (now.getMonth() + 1) + '-' + now.getDate();
    const handleOnSubmit = async (event,a) => {
        event.preventDefault();
    
        try {
            if (file) {
              const formData = new FormData();
              formData.append('file', file);
              formData.append('subject', subject);
              formData.append('date',date);
              formData.append('day', day);
              setErrorMsg('');
              await axios.post("http://localhost:9000/upload", formData, {
                headers: {
                  'Content-Type': 'multipart/form-data'
                }
              });
              nav('/Dashboard')
            } else {
              setErrorMsg('Please select a file to add.');
            }
        } catch (error) {
          error.response && setErrorMsg(error.response.data);
        }
      };
    return (
        <div>
            <h1 style={{textAlign:"center"}}>Hey....its {day} </h1>
            <h1 style={{textAlign:"center"}}>Upload Your Notes</h1>
            <div style={{textAlign:"center"}}>
                        <div className="row" style={{testAlign:'center'}}>
            {a.period.map((a)=>
                            <div className="col-lg-4" style={{position:'relative',left:'50px'}}>
                        <div class="card text-center mb-3" style={{width: "18rem"}}>
                        <div class="card-body">
                        <h5 class="card-title">{a}</h5>
                        <img style={{width:"150px",height:"150px",borderRadius:"100%"}}src={notes} alt="First slide" />
                        <p class="card-text">
                            <div>
                            <form onSubmit={handleOnSubmit} style={{padding:'10px'}}>
                            <input type="file" onChange={(e)=>{setFile(e.target.files[0]);setSubject(a)}} />
                            <button type="submit" className="btn btn-md btn-dark" style={{margin:'10px'}}>Upload</button>
                            </form>
                            <button type="submit" className="btn btn-md btn-dark" style={{margin:'10px'}} onClick={(e)=>nav('/downloadnotes')}>Download</button>
                            </div>
                            </p>
                        </div>
                        </div>
                        </div>
                        
            )}
            </div>
                        </div>

        </div>
    )
}

export default TodaysNotes;