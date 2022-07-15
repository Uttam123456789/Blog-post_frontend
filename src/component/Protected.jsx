import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';


const Protected = ({prop}) => {
    const {id} = useParams() 
    const navigate = useNavigate();

    const token = JSON.parse(localStorage.getItem('token'));
    useEffect(()=>{
    if(prop === "dashboard"){
        if (token.length == 0 || token == undefined) {
           navigate("/login");
        } else {
            navigate(`/Dashboard/${token.userId}`);
            
        }
    }
    // else if(prop === "dashboard/id"){
    //    if(token.userId == id){
    //        navigate(`/Dashboard/${token.userId}`);
    //    }
    //    else if(token.userId != id ){
    //     navigate(`/logout/${token.userId}`);
    //    }
    //    else{
    //        navigate("/login");
    //    }
    // }
    // else if(prop === "category/id"){
    //     console.log("category");
    // }
},[])
  return (
   <>
   
   
   </>
  )
}

export default Protected