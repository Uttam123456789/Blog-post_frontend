import React, { useEffect } from 'react';
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from 'axios';

const NavBar = () => {
    const navigate = useNavigate();
    const [status, setStatus] = useState(false);

    const token = JSON.parse(localStorage.getItem('token'));
    console.log("navbar page", token.token);
    const check = () => {
        if (token.length == 0 || token == undefined) {
            setStatus(false);
        } else {
            setStatus(true);
        }
    }

    const logout = () => {

        axios.post(`http://127.0.0.1:8000/api/logoutUser`, {
            headers: {
                Authorization: "Bearer" + " " + token.token,
            }
        })
            .then((e) => {
                console.log(e.data);
                localStorage.setItem('token', JSON.stringify([]));
                setStatus(false);
                navigate('/login');
            })
            .catch((e) => {
                console.log(e);
            })
    }
    useEffect(() => {
        check();
    }, [])
    return (
        <>
            <nav className="relative flex flex-wrap items-center justify-between px-2 bg-violet-500 mb-3">
                <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
                    <div className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white ">
                        <NavLink to={"/home"} className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white hover:opacity-75" href="#pablo">
                            All Post
                        </NavLink>

                        <NavLink className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75" to={"/Dashboard/:id"}>
                            DashBoard
                        </NavLink>
                    </div>

                    <div>{status ?
                        <button onClick={logout} className="text-sm font-bold leading-relaxed inline-block  py-2 whitespace-nowrap uppercase text-white" href="#pablo">
                            Logout
                        </button>

                        :
                        <span>
                            <NavLink to={"/login"} className="text-sm font-bold leading-relaxed inline-block mr-1 py-2 whitespace-nowrap uppercase text-white" href="#pablo">
                                Login
                            </NavLink><span className='text-white text-lg m-1' >/</span>
                            <NavLink to={"/register"} className="text-sm font-bold leading-relaxed inline-block  py-2 whitespace-nowrap uppercase text-white" href="#pablo">
                                Register
                            </NavLink>
                        </span>
                    }
                    </div>
                </div>
            </nav>
            <Outlet />
        </>
    )
}
export default NavBar