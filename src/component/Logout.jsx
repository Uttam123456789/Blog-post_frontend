import axios from 'axios';
import React from 'react';
import { useParams,useNavigate } from 'react-router-dom';


const Logout = () => {
    const {id} = useParams();
    const token = JSON.parse(localStorage.getItem('token'));
    const navigate = useNavigate();
    
    const logoutUser = (e)=>{
      axios.get(`http://127.0.0.1:8000/api/logoutUser`, { headers: {"Authorization" : `Bearer ${token.token}`} })
        .then((e) => {
            console.log(e);
            localStorage.setItem('token', JSON.stringify([]))
           
            navigate('/login')
        })
        .catch(() => {
            console.log("Error in the code", e);
            // console.log("error");
        });
       
    }

  return (
    <button type="button" onClick={logoutUser} className="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">User {id} Please logout first</button>

  )
}

export default Logout