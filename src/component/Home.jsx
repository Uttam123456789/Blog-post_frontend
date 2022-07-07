import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import axios from 'axios';

const Home = () => {
    const [category, setCategory] = useState([]);
    const [post, setPost] = useState([]);
    // const [temp , setTemp] = useState([]);
    const [search, setSearch] = useState("")


    const showCategory = (e) => {

        axios.get('http://127.0.0.1:8000/api/categoryView')
            .then((e) => {
                console.log(e.data);
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
                console.log(e.data);
               
                setPost(e.data);


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
        // showPost();
        let temp = post
        const item = post.filter((ele) => {
            return id === ele.category_id;
        })
        setPost(item);

    }

    const handleChange = (e) => {

        setSearch(e.target.value);
      
        const item = post.filter((ele) => {
            return ele.title.includes(search);
        })
        console.log(item);

        // setPost(post.filter((ele) => {
        //     return ele.title.includes(search);
        // }));
        // console.log(post);

    }
    console.log(search);
    const orig = 'http://localhost:8000/uploads/post/';

    return (
        <>
            <div className='h-12 w-screen bg-black mt-2 text-white '>
                <nav className='flex justify-between'>
                    <div className="ml-5">
                        <button className=' text-2xl' >All post</button>
                        <button className='mx-6 text-2xl'>Dashboard</button>
                    </div>
                    <div>
                        <div className="mr-5">
                            <NavLink to={"login"} className=" text-2xl ">  Login</NavLink ><span className='mx-2'>/</span>
                            <NavLink to={"register"} className=" text-2xl">Register</NavLink >
                        </div>
                    </div>
                </nav>
            </div>

            {/* searchbar */}

            <div class="flex justify-center">
                <div class="mb-3 xl:w-96">
                    <input
                        type="search"
                        class="mt-1 rounded-md form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-black roundedtransitionease-in-outm-0focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                        id="exampleSearch"
                        placeholder="Search here"
                        onChange={handleChange}
                    />
                </div>
            </div>

            <div className=' flex mx-6'>
                <div className='flex flex-col p-3 text-blackl w-44 '>
                    <h4 className='text-2xl underline'>Categories</h4>
                    <button className='text-2xl' onClick={showPost}>All</button>

                    {category.map((e, index) => {
                        return (
                            <>
                                <button className='text-2xl' onClick={() => getCategoryId(e.category_id)}>{e.name} </button>
                            </>
                        )
                    })}

                </div>
                <div className="w-1  p-0.5 bg-purple-600 "></div>

                <div className=" mt-8  ml-5  grid grid-cols-4 gap-6">
                    {
                        post.map((e) => {
                            return (<>
                                <div className=" bg-pink-300 max-w-xs h-64 rounded-md overflow-hidden shadow-lg">
                                    <img className="w-4/5" src={orig + e.image} alt="Sunset in the mountains" />
                                    <div className="px-6 py-4">
                                        <p className='text-xl my-1'>{e.title}</p>
                                        <Link to={"post/"+e.post_id} class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full "  >View</Link>
                                    </div>
                                </div>
                            </>)
                        })
                    }


                </div>
            </div>
        </>
    )
}

export default Home