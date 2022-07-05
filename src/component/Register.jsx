
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Register = () => {


    const [name, setName] = useState("");
    const [mail, setMail] = useState("");
    const [img, setImg] = useState("")
    const [password, setPassword] = useState("");

    const [role, setRole] = useState("");
    const submitForm = async (e) => {
        e.preventDefault();
        console.log({ name, mail, img, password, role });

        const data = new FormData();
        data.append('name', name);
        data.append('mail', mail);
        data.append('image',img);
        data.append('role',role);
        data.append('password', password);


        axios.post('http://127.0.0.1:8000/api/userStore', data)
            .then((e) => {
                console.log(e);
                alert(e);

            })
            .catch(() => {
                alert("Error in the code", e);
                // console.log("error");
            });


        // console.warn(data);
        setName("");
        setMail("");
        setPassword("");

        setRole("");

    }

    return (
        <>
            

            <div className="flex items-center justify-center min-h-screen bg-gray-100">
                <div className="px-8 py-6 mx-4 mt-4 text-left bg-white shadow-lg md:w-1/3 lg:w-1/3 sm:w-1/3">
                    <div className="flex justify-center">
                        <h4 className="text-3xl font-bold text-center" >Register Here</h4>
                    </div>

                    <form onSubmit={submitForm}>
                        <div className="mt-4">
                            <div>
                                <label className="block" htmlFor="Name">Name</label>
                                <input type="text" name='name' placeholder='Name' value={name} onChange={(e) => { setName(e.target.value) }} className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600" />
                            </div>
                            <div className="mt-4">
                                <label className="block" htmlFor="email">Email</label>
                                <input type="text" name='mail' placeholder='email' value={mail} onChange={(e) => { setMail(e.target.value) }} className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600" />
                            </div>
                            <div className="mt-4">
                                <label className="block" htmlFor="image">Image</label>
                                <input type="file" name='image' placeholder='Image' accept="image/*" onChange={(e) => { setImg(e.target.files[0]) }} className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"  />
                            </div>
                            <div className="mt-4">
                                <label className="block" htmlFor="role">Role</label>
                                <input type="text" name='role' placeholder='Role' value={role} onChange={(e) => { setRole(e.target.value) }} className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600" />

                            </div>
                            <div className="mt-4">
                                <label className="block">Password</label>
                                <input type="password" name='password' placeholder='Password' value={password} onChange={(e) => { setPassword(e.target.value) }} className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600" />
                            </div>

                            <div className="flex">
                                <button className="w-full px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900" onClick={submitForm}>
                                    Register </button>
                            </div>
                            <div className="mt-6 text-grey-dark">
                                Already have an account?
                                <Link className="text-blue-600 hover:underline" to={"login"}>
                                    Log in
                                </Link>
                            </div>
                        </div>
                    </form>
                </div>
            </div>


        </>
    )
}


export default Register;