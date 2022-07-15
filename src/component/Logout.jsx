import React from 'react';
import { useParams } from 'react-router-dom';

const Logout = () => {
    const {id} = useParams()
    
    const logoutUser = ()=>{
       
    }

  return (
    <button type="button" onClick={logoutUser} className="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">User {id} Please logout first</button>

  )
}

export default Logout