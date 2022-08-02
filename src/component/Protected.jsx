import React, { useEffect } from 'react';
import { useNavigate, useParams,Navigate,Outlet } from 'react-router-dom';


const Protected = ({prop}) => {
    const {id} = useParams() 
    const navigate = useNavigate();

    const token = JSON.parse(localStorage.getItem('token'));

    let auth = {'token':token.token};


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
   {
    auth.token ? "" : alert("please login")
   }
   {
       
   auth.token ? <Outlet/> :( <Navigate to="/login"/>)
   }
   </>
  )
}

export default Protected