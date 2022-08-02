import axios from 'axios';
import { useParams, Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';

const Category = () => {
    const { id } = useParams();
    const [item, setItem] = useState([]);
    const [state , setState] = useState("");
    const [editStatus, setEditStatus] = useState(false);
    const [updateId ,setUpdateId] = useState("");
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [img, setImg] = useState("");

    const user = JSON.parse(localStorage.getItem('token'));
    const submitUpdateForm = (e) => {
        e.preventDefault();
        const data = new FormData;
        data.append('title', title);
        data.append('image', img);
        data.append('desc', desc);
        axios.post(`http://127.0.0.1:8000/api/postUpdate/${updateId}`, data)
            .then((e) => {
                console.log(e);
                alert(e.data);
                setState("edited")

            })
            .catch(() => {
                alert("Error in the code", e);
                // console.log("error");
            });
        setTitle("");
       
        setDesc("");
        setEditStatus(false);
    }


    const getData = (e) => {
        
        axios.get('http://127.0.0.1:8000/api/postView')
            .then((e) => {
                console.log(e.data);
                setItem(e.data);

            })
            .catch(() => {
                alert("Error in the code", e);
                // console.log("error");
            });
    }
    
    const EditCategory = (id, user_id) => {
        if (user.userId == user_id) {
            setEditStatus(true);
            setUpdateId(id);
        }
        else { console.log("not access"); }
    }

    const deleteCategory = (id,user_id) => {
        if (user.userId == user_id) {
            axios.delete(`http://127.0.0.1:8000/api/postDelete/${id}`)
                .then((e) => {
                    console.log(e.data);
                    setState("deleted");
                })
                .catch((e) => {
                    alert("Error in the code", e);
                    // console.log("error");
                });
        }
    
        else {   alert("only the Owner can delete the post"); }
    }

let data = item.filter((e) => {
    return e.category_id == id;
})
useEffect(() => {
    getData();
}, [state])

const orig = 'http://localhost:8000/uploads/post/';
return (
    <>
        <h3 className='underline text-2xl text-center indent-0.5'>Category details</h3>
        <div className=" mt-8  ml-5  grid grid-cols-4 gap-6">
            {data.map((e) => {
                return (<>
                    <div className=" bg-slate-300 max-w-xs h-64 rounded-md overflow-hidden shadow-lg">
                        <img className="w-3/4 m-auto mt-3" src={orig + e.image} alt="Sunset in the mountains" />
                        <div className="px-6 py-4">
                            <p className='text-xl my-1'>{e.title}</p>
                            <Link to={"/post/" + e.post_id} className="bg-sky-500 text-white active:bg-sky-600 font-bold uppercase text-xs px-4 py-2 rounded-full shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"  >View</Link>
                            <button onClick={() => EditCategory(e.post_id, e.user_id)} className="bg-teal-500 text-white active:bg-teal-600 font-bold uppercase text-xs px-4 py-2 rounded-full shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button" >Edit</button>
                            <button onClick={() => deleteCategory(e.post_id,e.user_id)} className="bg-rose-500 text-white active:bg-rose-600 font-bold uppercase text-xs px-4 py-2 rounded-full shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">Delete</button>
                        </div>
                    </div>
                </>)
            })

            }
            {
                    editStatus ? 
                    <form onSubmit={submitUpdateForm}>
                        <label className="block" htmlFor="Name">Title</label>
                        <input type="text" name='title' placeholder='Title' value={title} onChange={(e) => { setTitle(e.target.value) }} className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600" />
                        <label className="block" htmlFor="Name">Image</label>
                        <input type="file" name='image' onChange={(e) => { setImg(e.target.files[0]) }} className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600" />
                        <label className="block" htmlFor="Name">Description</label>
                        <textarea name="desc" rows="4" placeholder='Description' value={desc} onChange={(e) => { setDesc(e.target.value) }} className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"></textarea>
                        <div className="flex">
                            <button className="w-full px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900" onClick={submitUpdateForm}>
                                Add </button>
                        </div>
                    </form> : ""
                }

        </div>
    </>
)
}

export default Category