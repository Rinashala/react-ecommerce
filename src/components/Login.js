import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
    const [userForm, setUserForm] = useState({ username: "", password: "" });
    const [errorText, setErrorText] = useState('');
    const [logged, setLogged] = useState(false);
    const navigate = useNavigate();

    function loginBtn(e) {
        e.preventDefault();
        if (!userForm.username || !userForm.password) {
            setErrorText('Please fill in both fields.');
        } else {
            setLogged(true);
            localStorage.setItem("logged", JSON.stringify(true));
            navigate('/products');
        }
    }

    return (
        <div className=' min-h-min flex flex-col justify-center items-center bg-pink-100 p-16'>
            <h1 className='text-4xl font-bold text-pink-700 mb-4'>LOGIN</h1>
            <form onSubmit={loginBtn} className='flex flex-col items-center'>
                <input
                    type="text"
                    placeholder="Username"
                    className="mb-4 p-2 w-64 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
                    onChange={(e) => setUserForm({ ...userForm, username: e.target.value })}
                    value={userForm.username}
                />

                <input
                    type="password"
                    placeholder="Password"
                    className="mb-6 p-2 w-64 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
                    onChange={(e) => setUserForm({ ...userForm, password: e.target.value })}
                    value={userForm.password}
                />
                <br />
                <button
                    type="submit"
                    className="px-6 py-2 bg-pink-600 text-white rounded-md hover:bg-pink-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                    Login
                </button>
            </form>
            {errorText && <p className="text-red-600 mt-4">{errorText}</p>}
        </div>
    );
}

export default Login;
