import React from 'react';
import { Link } from 'react-router-dom';

const CardSearch = ({search , post }) => {
    console.log(search);
    const item = post.filter((ele) => {
        if(ele.title.toLowerCase().includes(search.toLowerCase())) return ele;

    })
    console.log(item);
    const orig = 'http://localhost:8000/uploads/post/';
  return (
    <>    
    {   item.length === 0? <span className='text-xl text-center text-red-700'>No Result Found</span> :
        item.map((e) => {
            return (<>
                <div className=" bg-slate-300 max-w-xs h-64 rounded-md overflow-hidden shadow-lg">
                    <img className="w-3/4 m-auto mt-3" src={orig + e.image} alt="Sunset in the mountains" />
                    <div className="px-6 py-4">
                        <p className='text-xl my-1'>{e.title}</p>
                        <Link to={"/post/" + e.post_id} class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full "  >View</Link>
                    </div>
                </div>
            </>)
        })
    }
    </>
  )
}

export default CardSearch