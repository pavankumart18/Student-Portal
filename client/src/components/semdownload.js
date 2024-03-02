import React, { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import download from 'downloadjs';
import './Download.css'
function SemDownload(props){
    const [fileList,setFilesList]=useState([]);
    const [errorMsg,setErrorMsg]=useState('');

    useEffect(() => {
        const getFilesList=async()=>{
            try{
                const {data}=await axios.get("http://localhost:9000/getAllFiles/sem");
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
            const result=await axios.get(`http://localhost:9000/downloadsem/${id}`,{
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
           <h1>You Can Download sem notes here ..Happy Learning</h1>
         <table className="files-table styled-table">
             <tbody>
                 {fileList.length > 0 ? (
                   fileList.map(
                       ({_id,title,description,file_path,file_mimetype}) => (
                           <tr key={_id}>
                              <td>{title}</td>
                              <td>{description}</td>
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

export default SemDownload;
