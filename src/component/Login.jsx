
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
    const [mail, setMail] = useState("");
    const [password, setPassword] = useState("");

      const navigate = useNavigate();
    const submitdata = async (e) => {
        e.preventDefault();
        


        const data = new FormData();
        data.append('email',mail);
        data.append('password',password);


        axios.post('http://127.0.0.1:8000/api/login', data)
                    .then((e) => {
                        console.log(e);
                        localStorage.setItem('token',JSON.stringify(e.data));
                        const temp = e.data.userId;
                        console.log(temp);
                          navigate(`/Dashboard/${temp}`);
                        alert("ok")
                    
                    })
                    .catch(() => {
                        alert("Error in the code", e);
                        // console.log("error");
                    });



        setMail("");
        setPassword("");
    }

    return (
        <>
            <section className="h-screen">
                <div className="container px-6 py-12 h-full">
                    <div className="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
                        <div className="md:w-8/12 lg:w-6/12 mb-12 md:mb-0">
                            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg" className="w-full" alt="Phone image" />
                        </div>
                        <div className="md:w-8/12 lg:w-5/12 lg:ml-20">
                            <div className="flex justify-center my-6">
                                <h4 className="text-3xl font-bold text-center" >Login Here</h4>
                            </div>
                            <form onSubmit={submitdata}>
                                {/* Email input */}
                                <div className="mb-6 w-72">
                                    <input type="email" name="email" value={mail} onChange={(e) => { setMail(e.target.value) }} className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Email address" />
                                </div>
                                {/* Password input */}
                                <div className="mb-6 w-72">
                                    <input type="password" name="password" value={password} onChange={(e) => { setPassword(e.target.value) }} className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Password" />
                                </div>

                               
                                <button type="submit" onClick={submitdata} className="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-32" data-mdb-ripple="true" data-mdb-ripple-color="light">
                                    Sign in
                                </button>

                            </form>
                            <div className="mt-6 text-grey-dark">
                                Don't have an account?
                                <Link className="text-blue-600 hover:underline" to={"/register"}>
                                    Register
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Login