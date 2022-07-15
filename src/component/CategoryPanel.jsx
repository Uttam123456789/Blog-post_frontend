import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


const CategoryPanel = () => {
    const [name, setName] = useState("");
    const [item, setItem] = useState("");
    const [status, setStatus] = useState("");
    const [update , setUpdate] =useState(false)
    
    
    const user = JSON.parse(localStorage.getItem('token'))
    
    const submitForm = async (e) => {
        e.preventDefault();
       
        const data = new FormData;
        data.append('name',name);   
        data.append('user',user.userId)
        

        axios.post('http://127.0.0.1:8000/api/categoryStore', data)
            .then((e) => {
                console.log(e)
                alert(e)
               

            })
            .catch(() => {
                alert("Error in the code", e)
                // console.log("error");
            });


        // // console.warn(data);
        setName("");

    }
    const getData = (e) => {
        axios.get(`http://127.0.0.1:8000/api/categoryView`)
            .then((e) => {
                console.log(e.data);
                setItem(e.data)

            })
            .catch(() => {
                alert("Error in the code", e);
                // console.log("error");
            });
    }
    const deleteCategory=(id , userid )=>{
        setUpdate(false);
        if(user.userId == userid ) {
            axios.delete(`http://127.0.0.1:8000/api/categoryDelete/${id}`)
            .then((e) => {
                setUpdate(true)
                console.log(e.data)
               
            })
            .catch((e) => {
                alert("Error in the code", e);
                // console.log("error");
            });
        }

        else{
            alert("only the Owner can delete the Category");
        }
      
    }
    useEffect(() => {
        getData();

    }, [status, update])
    return (
        <>
            <div >
                <button className="block text-blue-800 text-sm font-semibold rounded-lg hover:bg-gray-100 focus:outline-none focus:shadow-outline focus:bg-gray-100 hover:shadow-xs p-3 my-4" onClick={() => { setStatus(true) }}>Create Category</button>
                <button className="block text-blue-800 text-sm font-semibold rounded-lg hover:bg-gray-100 focus:outline-none focus:shadow-outline focus:bg-gray-100 hover:shadow-xs p-3 my-4" onClick={() => { setStatus(false) }} >Show All</button>
            </div>
            <div>
                {status === "" ? "" : (status ?
                    <form onSubmit={submitForm}>
                        <label className="block" htmlFor="Name"> Category Name</label>
                        <input type="text" name='name' placeholder='Name' value={name} onChange={(e) => { setName(e.target.value) }} className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600" />
                        <div className="flex">
                            <button className="w-full px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900" onClick={submitForm}>
                                Create </button>
                        </div>
                    </form>
                    : <>
                        <h3 className='underline text-xl text-center indent-3 m-2'>All Categories</h3>
                        <div className='flex'>
                            {
                                item.map((ele) => {
                                    return (<div className='flex flex-col'>
                                        <Link to={`/category/` + ele.category_id}>
                                            <div className="flex flex-wrap justify-center">
                                                <div className="w-6/12 sm:w-4/12 px-1">
                                                    <span className="text-indigo-500 border border-indigo-500 hover:bg-indigo-500 hover:text-white active:bg-indigo-600 font-bold uppercase text-sm px-6 py-3 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">{ele.name}</span>
                                                    
                                                </div>
                                            </div>
                                        </Link>
                                        <div className="flex flex-wrap justify-center">
                                                <div className="w-9/12 sm:w-4/12 px-1">
                                                    <button onClick={()=>deleteCategory(ele.category_id , ele.user_id)} className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-2 py-1 text-center mr-2 mb-2" type="button">Delete</button>
                                                    
                                                </div>
                                            </div>
                                    </div>)
                                })
                            }
                        </div>
                    </>
                )}
            </div>
        </>
    )
}

export default CategoryPanel