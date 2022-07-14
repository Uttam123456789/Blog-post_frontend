import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const PostPanel = () => {

    const [post, setPost] = useState([]);
    const [status, setStatus] = useState("");
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [img, setImg] = useState("");
    const [category, setCategory] = useState("");
    const [categoryData, setCategoryData] = useState([]);
    const [editStatus, setEditStatus] = useState(false);


    const user = JSON.parse(localStorage.getItem('token'))


    const updatePost = (id) => {
        setEditStatus(true);


    }
    // const submitUpdateForm = (e) => {
    //     e.preventDefault();
    //     data.append('title', title);
    //     data.append('image', img);
    //     data.append('desc', desc);
    //     axios.post('http://127.0.0.1:8000/api/postStore', data)
    //         .then((e) => {
    //             console.log(e);
    //             alert(e.data);


    //         })
    //         .catch(() => {
    //             alert("Error in the code", e);
    //             // console.log("error");
    //         });
    //     setTitle("");
    //     setCategory("");
    //     setDesc("");
    //     setEditStatus(false);
    // }


    const submitPostForm = async (e) => {
        e.preventDefault();
        const item = categoryData.filter((ele) => {
            if (ele.name.includes(category)) return ele;
        })

        if (item.length != 0) {
            console.log(item);
            const data = new FormData;
            data.append('title', title);
            data.append('image', img);
            data.append('desc', desc);
            data.append('category_id', item[0].category_id);
            data.append('user_id', user.userId);

            axios.post('http://127.0.0.1:8000/api/postStore', data)
                .then((e) => {
                    console.log(e);
                    alert(e.data);


                })
                .catch(() => {
                    alert("Error in the code", e);
                    // console.log("error");
                });
            setTitle("");
            setCategory("");
            setDesc("");

        }
        else {
            alert("no such category exist");
        }


    }
    const getData = (e) => {
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
    const getCategory = (e) => {
        axios.get(`http://127.0.0.1:8000/api/categoryView`)
            .then((e) => {
                console.log(e.data);
                setCategoryData(e.data);

            })
            .catch(() => {
                alert("Error in the code", e);
                // console.log("error");
            });
    }
    const deletePost = (id, e) => {
        axios.delete(`http://127.0.0.1:8000/api/postDelete/${id}`)
            .then((e) => {
                console.log(e.data);
            })
            .catch(() => {
                alert("Error in the code", e);
                // console.log("error");
            });
    }

    useEffect(() => {
        getData();
        getCategory();
    }, []);
    const orig = 'http://localhost:8000/uploads/post/';
    return (
        <>
            <div>
                <button onClick={() => { setStatus(true) }} className="block text-blue-800 text-sm font-semibold rounded-lg hover:bg-gray-100 focus:outline-none focus:shadow-outline focus:bg-gray-100 hover:shadow-xs p-3 my-4" >create Post</button>
                <button onClick={() => { setStatus(false) }} className="block text-blue-800 text-sm font-semibold rounded-lg hover:bg-gray-100 focus:outline-none focus:shadow-outline focus:bg-gray-100 hover:shadow-xs p-3 my-4" >All Post</button>
            </div>
            <div>
                {status === "" ? "" : (status ?
                    <form onSubmit={submitPostForm}>
                        <label className="block" htmlFor="Name">Title</label>
                        <input type="text" name='title' placeholder='Title' value={title} onChange={(e) => { setTitle(e.target.value) }} className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600" />
                        <label className="block" htmlFor="Name">Image</label>
                        <input type="file" name='image' onChange={(e) => { setImg(e.target.files[0]) }} className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600" />
                        <label className="block" htmlFor="Name">Category</label>
                        <input type="text" name='category' placeholder='Category' value={category} onChange={(e) => { setCategory(e.target.value) }} className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600" />
                        <label className="block" htmlFor="Name">Description</label>
                        <textarea name="desc" rows="4" placeholder='Description' value={desc} onChange={(e) => { setDesc(e.target.value) }} className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"></textarea>
                        <div className="flex">
                            <button className="w-full px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900" onClick={submitPostForm}>
                                Add </button>
                        </div>
                    </form> : <>
                        <h3 className='underline text-xl text-center indent-3 m-2'>All Posts</h3>

                        <div className='mt-8  ml-5  grid grid-cols-4 gap-6'>
                            {
                                post.map((e) => {
                                    return (<>
                                        <div className=" bg-slate-300 w-64 h-50 rounded-md overflow-hidden shadow-lg">
                                            <img className="w-2/4 m-auto mt-3" src={orig + e.image} alt="Sunset in the mountains" />
                                            <div className="px-6 py-4">
                                                <p className='text-xl my-1'>{e.title}</p>
                                                <Link to={"/post/" + e.post_id} className="bg-sky-500 text-white active:bg-sky-600 font-bold uppercase text-xs px-4 py-2 rounded-full shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"  >View</Link>
                                                <button onClick={() => { updatePost(e.post_id) }} className="bg-teal-500 text-white active:bg-teal-600 font-bold uppercase text-xs px-4 py-2 rounded-full shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button" >Edit</button>
                                                <button onClick={() => { deletePost(e.post_id) }} className="bg-rose-500 text-white active:bg-rose-600 font-bold uppercase text-xs px-4 py-2 rounded-full shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">Delete</button>
                                            </div>
                                        </div>
                                    </>)
                                })
                            }
                        </div>
                    </>
                )}
                {/* {
                    editStatus ? <form onSubmit={submitPostForm}>
                        <label className="block" htmlFor="Name">Title</label>
                        <input type="text" name='title' placeholder='Title' value={title} onChange={(e) => { setTitle(e.target.value) }} className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600" />
                        <label className="block" htmlFor="Name">Image</label>
                        <input type="file" name='image' onChange={(e) => { setImg(e.target.files[0]) }} className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600" />
                        <label className="block" htmlFor="Name">Category</label>
                        <input type="text" name='category' placeholder='Category' value={category} onChange={(e) => { setCategory(e.target.value) }} className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600" />
                        <label className="block" htmlFor="Name">Description</label>
                        <textarea name="desc" rows="4" placeholder='Description' value={desc} onChange={(e) => { setDesc(e.target.value) }} className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"></textarea>
                        <div className="flex">
                            <button className="w-full px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900" onClick={submitPostForm}>
                                Add </button>
                        </div>
                    </form> : ""
                } */}
            </div>

        </>
    )
}

export default PostPanel