import React from 'react'
import { useJwt} from "react-jwt";
import FinalShow from './FinalShow';
function Studentdash(){
    const token=localStorage.getItem('token')
    const { decodedToken, isExpired } = useJwt(token);
    if(isExpired){
        console.log(decodedToken)
        const name=decodedToken
        return (
            <div>
                  <FinalShow name={name}/>
            </div>
        )
    }else{
        return <h1>try again</h1>
    }
}

export default Studentdash;
