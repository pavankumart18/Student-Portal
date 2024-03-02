import React from "react"
import {Route,Routes} from 'react-router-dom';
import './Notes.css';

import Login from "./Login";
import Student from "./Registerstud";
import Studentdash from "./Studentdash";
import TodaysNotes from "./TodaysNotes";
import Downloadpdf from "./Downloadpdf";
import SemNotes from "./semnotes";
import SemDownload from "./semdownload";


function App() {
 
  return (
    <div >
      <Routes>
             <Route path="/" element={<Login />} />
             <Route path="/registerStudent" element={<Student />} />
             <Route path="/Dashboard" element={<Studentdash />} />
             <Route path="/todaysnotes" element={<TodaysNotes />} />
             <Route path="/downloadnotes" element={<Downloadpdf />} />
             <Route path="/semnotes" element={<SemNotes />} />
             <Route path="/SemDownload" element={<SemDownload />} />
      </Routes>
    </div>
  );
}

export default App;
