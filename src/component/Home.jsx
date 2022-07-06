import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Home = () => {
    const showCategory = () => {

    }
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
                            <NavLink to={"login"} className=" text-2xl">  Login</NavLink ><span className='mx-2'>/</span>
                            <NavLink to={"register"} className=" text-2xl">Register</NavLink >
                        </div>
                    </div>
                </nav>
            </div>

            <div className='flex mx-6'>
                <div className='flex flex-col p-3 text-white w-44 bg-red-700'>
                    <span className='text-2xl'>hi </span>
                    <span>byr</span>
                    <span>okok</span>
                    <span>okok</span>
                    <span>okok</span>
                    
                    
                </div>

                <div className=" h-64  mt-8 ml-5 grid grid-cols-4 gap-6">
                    <div className=" max-w-xs rounded overflow-hidden shadow-lg">
                        <img className="w-full" src="https://v1.tailwindcss.com/img/card-top.jpg" alt="Sunset in the mountains" />
                        <div className="px-6 py-4">
                        </div>
                    </div>
                    <div className="max-w-xs rounded overflow-hidden shadow-lg">
                        <img className="w-full" src="https://v1.tailwindcss.com/img/card-top.jpg" alt="Sunset in the mountains" />
                        <div className="px-6 py-4">
                        </div>
                    </div>
                    <div className="max-w-xs rounded overflow-hidden shadow-lg">
                        <img className="w-full" src="https://v1.tailwindcss.com/img/card-top.jpg" alt="Sunset in the mountains" />
                        <div className="px-6 py-4">
                        </div>
                    </div>
                    <div className="max-w-xs rounded overflow-hidden shadow-lg">
                        <img className="w-full" src="https://v1.tailwindcss.com/img/card-top.jpg" alt="Sunset in the mountains" />
                        <div className="px-6 py-4">
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home