import axios from 'axios';
import { useParams,Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';

const Category = () => {
    const {id} = useParams();
    const [item, setItem] = useState([]);

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
    useEffect(() => {
        getData();
    }, [])
    console.log(id);
    let data = item.filter((e)=>{
        return e.category_id == id ;
    })
    console.log(data);
    const orig = 'http://localhost:8000/uploads/post/';
    return (
        <>
        <h3 className='underline text-2xl text-center indent-0.5'>Category details</h3>
         <div className=" mt-8  ml-5  grid grid-cols-4 gap-6">
        {   data.map((e) => {
                            return (<>
                                <div className=" bg-slate-300 max-w-xs h-64 rounded-md overflow-hidden shadow-lg">
                                    <img className="w-3/4 m-auto mt-3" src={orig + e.image} alt="Sunset in the mountains" />
                                    <div className="px-6 py-4">
                                        <p className='text-xl my-1'>{e.title}</p>
                                        <Link to={"/post/" + e.post_id} className="bg-sky-500 text-white active:bg-sky-600 font-bold uppercase text-xs px-4 py-2 rounded-full shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"  >View</Link>
                                        <button className="bg-teal-500 text-white active:bg-teal-600 font-bold uppercase text-xs px-4 py-2 rounded-full shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button" >Edit</button>
                                            <button className="bg-rose-500 text-white active:bg-rose-600 font-bold uppercase text-xs px-4 py-2 rounded-full shadow hover:shadow-md outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">Delete</button>
                                    </div>
                                </div>
                            </>)
                        })

        }

        </div>
        </>
    )
}

export default Category