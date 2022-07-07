import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Post = () => {
    const [item, setItem] = useState([]);




    const { id } = useParams();
    console.log(id);


    const showPost = (e) => {
        axios.get('http://127.0.0.1:8000/api/postView')
            .then((e) => {
                console.log(e.data[1].post_id);
                const data = e.data.filter((ele) => {
                    return ele.post_id == id;
                })
                setItem(data[0]);
            })
            .catch(() => {
                alert("Error in the code", e);
                // console.log("error");
            });

    }
    const path = 'http://localhost:8000/uploads/post/';
    console.log(item);
    useEffect(() => {

        showPost();
    }, [])
    return (
        <>
            <div className='extra h-screen flex justify-center items-center'>

                <div className="inner  bg-slate-100 p-3">
                    <div className='w-80 m-4'>
                    <img className='rounded-lg' src={path + item.image} alt="" /></div>
                     <div>
                        <label className='text-2xl'> Category : <span className='text-xl'>{item.category_id}</span> </label>
                    </div> 
                    <div className='my-5'>
                        <label className='text-2xl'> Title :</label><span className='text-xl ml-2'>{item.title}</span>
                    </div>
                    <div>
                        <label className='text-2xl'> Description :</label><p>{item.desc}</p>
                    </div>
                </div>
            </div>


        </>
    )
}

export default Post;