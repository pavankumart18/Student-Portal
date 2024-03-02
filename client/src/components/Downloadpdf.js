import React, { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import download from 'downloadjs';
import './Download.css'
function Downloadpdf(props){
    const [fileList,setFilesList]=useState([]);
    const [errorMsg,setErrorMsg]=useState('');

    useEffect(() => {
        const getFilesList=async()=>{
            try{
                const {data}=await axios.get("http://localhost:9000/getAllFiles");
                setErrorMsg('');
                setFilesList(data);
            }catch(error){
                error.response && setErrorMsg(error.response.data)
            }
        }
        getFilesList();
    },[]);
    const downloadFile=async(id,path,mimetype)=>{
        try{
            const result=await axios.get(`http://localhost:9000/download/${id}`,{
                responseType: 'blob'
            });
            const split=path.split('/');
            const filename=split[split.length-1];
            setErrorMsg('');
            return download(result.data,filename,mimetype)
        }catch (error) {
            if(error.response && error.response.status === 400){
                setErrorMsg('Error while downloading file. Try again later');
            }
        }
    }

    return (
        <div className="files-container" style={{color:"while"}}>
           {errorMsg && <p className="errorMsg">{errorMsg}</p>}
           <h1>You Can Download here ..Happy Learning</h1>
         <table className="files-table styled-table">
             <tbody>
                 {fileList.length > 0 ? (
                   fileList.map(
                       ({_id,subject,date,day,file_path,file_mimetype}) => (
                           <tr key={_id}>
                              <td>{subject}</td>
                              <td>{date}</td>
                              <td>{day}</td>
                              <td>
                                  <a href="#/" onClick={() => downloadFile(_id, file_path, file_mimetype)}>Download</a>
                              </td>
                           </tr>
                       )
                   )
                 ): (
                     <tr >
                    <td colSpan = {3} style={{fontWeight: '300'}}>
                    No files found. please add some
                    </td>
                     </tr>
                 )}
             </tbody>
         </table>

       </div>
    );
};

export default Downloadpdf;
