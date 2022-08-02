import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import axios from 'axios';
import CardSearch from './CardSearch';

const Home = () => {
    const [category, setCategory] = useState([]);
    const [post, setPost] = useState([]);
    const [search, setSearch] = useState("");
    
    const showCategory = (e) => {

        axios.get('http://127.0.0.1:8000/api/categoryView')
            .then((e) => {
                setCategory(e.data);                
            })
            .catch(() => {
                alert("Error in the code", e);
                // console.log("error");
            });
    }
    const showPost = (e) => {
        axios.get('http://127.0.0.1:8000/api/postView')
            .then((e) => {
                setPost(e.data);
                localStorage.setItem('allpost',JSON.stringify(e.data));
                
               
            })
            .catch(() => {
                alert("Error in the code", e);
                // console.log("error");
            });
    }
    useEffect(() => {
        showCategory();
        showPost();
    }, [])
    const getCategoryId = (id) => {
      
        
        const item = JSON.parse(localStorage.getItem('allpost')).filter((ele) => {
            return id === ele.category_id;
        })
        setPost(item);
    }
    const handleChange = (e) => {

        setSearch(e.target.value);
    }
    console.log(search);
    const orig = 'http://localhost:8000/uploads/post/';

    return (
        <>
            <div className='flex justify-center w-screen' >

                <input type="text" onChange={handleChange} className="px-2 py-1 h-8 border border-solid border-zinc-600 rounded-full text-sm leading-snug text-zinc-700 bg-zinc-100 shadow-none outline-none focus:outline-none w-full font-normal rounded-l-none flex-1 border-l-0 placeholder-zinc-300" placeholder="Search zinc" />
            </div>

            <div className=' flex mx-6'>
                <div className='flex flex-col p-3 text-blackl w-44 '>
                    <h4 className='text-2xl underline'>Categories</h4>
                    <button className="text-2xl font-serif" onClick={showPost}>All</button>

                    {category.map((e, index) => {
                        return (
                            <>
                                <button className='text-2xl font-serif' onClick={() => getCategoryId(e.category_id)}>{e.name} </button>
                            </>
                        )
                    })}

                </div>
                <div className="w-1  p-0.5 bg-purple-600 "></div>

                <div className=" mt-8  ml-5  grid grid-cols-4 gap-6">
                    
                    {search === ""?
                        post.map((e) => {
                            return (<>
                                <div className=" bg-slate-300 max-w-xs h-64 rounded-md overflow-hidden shadow-lg">
                                    <img className="w-3/4 m-auto mt-3" src={orig + e.image} alt="Sunset in the mountains" />
                                    <div className="px-6 py-4">
                                        <p className='text-xl my-1'>{e.title}</p>
                                        <Link to={"/post/" + e.post_id} class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full "  >View</Link>
                                    </div>
                                </div>
                            </>)
                        }):
                        <CardSearch search={search} post = {post} />
                    }

                
                </div>
            </div>
        </>
    )
}

export default Home