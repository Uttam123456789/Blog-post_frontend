import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import CategoryPanel from './CategoryPanel';
import PostPanel from './PostPanel';

const DashBoard = () => {
    const [item, setItem] = useState("");
    const [status, setStatus] = useState("");
    
    const { id } = useParams();
    console.log(id);
    const submitForm = (e) => {
        e.preventDefault();

    }
    const submitPostForm = (e)=>{
        e.preventDefault();

    }
    const getUser = (e) => {
        axios.get(`http://127.0.0.1:8000/api/userView/${id}`)
            .then((e) => {
                console.log(e.data);
                setItem(e.data);

            })
            .catch(() => {
                alert("Error in the code", e);
                // console.log("error");
            });
    }

    useEffect(() => {
        getUser();

    }, []);
    const orig = 'http://localhost:8000/';
    return (
        <>
            <div className="container mx-auto my-5 p-5">
                <div className=" ">
                    {/* Left Side */}
                    <div className="w-full  md:mx-2 md:flex no-wrap">
                        {/* Profile Card */}
                        <div className="bg-white p-3 border-t-4 border-green-400 md:w-1/6">
                            <div className="image overflow-hidden">
                                <img className="h-auto w-full mx-auto" src={orig + item.image} alt="" />
                            </div>



                        </div>
                        <div className="w-full md:w-9/12 mx-2 h-64">
                            {/* Profile tab */}
                            {/* About Section */}
                            <div className="bg-white p-3 shadow-sm rounded-sm">
                                <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8">

                                    <span className="tracking-wide">About</span>
                                </div>
                                <div className="text-gray-700">
                                    <div className="grid md:grid-cols-2 text-sm">
                                        <div className="grid grid-cols-2">
                                            <h1 className="text-gray-900 font-bold text-xl leading-8 my-1">Name: {item.name}</h1>
                                            <div className="px-4 py-2 font-semibold">Mail : {item.email}</div>
                                        </div>
                                        <div className="grid grid-cols-2">
                                            <div className="px-4 py-2 font-semibold">Dev : {item.role}</div>
                                        </div>

                                    </div>
                                </div>
                                <div className='flex' ><button onClick={()=>{ setStatus("category")}} className="block text-blue-800 text-sm font-semibold rounded-lg hover:bg-gray-100 focus:outline-none focus:shadow-outline focus:bg-gray-100 hover:shadow-xs p-3 my-4">
                                    Category</button>
                                    <button onClick={()=>{setStatus("post");}} className="block  text-blue-800 text-sm font-semibold rounded-lg hover:bg-gray-100 focus:outline-none focus:shadow-outline focus:bg-gray-100 hover:shadow-xs p-3 my-4">
                                        Post</button></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='flex justify-evenly' >

                {/* category or post */}

                {
                    status ==="" ? "" :(status === "category" ? <CategoryPanel/> : <PostPanel/>)
                }


            </div>
        </>
    )
}

export default DashBoard