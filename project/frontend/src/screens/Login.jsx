import React, { useState } from 'react'
import Header from '../components/Header'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { toast, ToastContainer } from 'react-toastify'

const Login = () => {
    const [userDetails, setUserDetails] = useState({
        email: '',
        password: ''
    })
    const navigate = useNavigate()

    const loginSubmitHandler = async () => {
        try {

            const response = await axios.post('http://localhost:3000/login', userDetails)
          
            if (response?.data?.status === 200) {
                toast.success(response?.data?.message)
                const token = response?.data?.token
                localStorage.setItem('token', token)
                navigate('/')
            }
        }
        catch (err) {
            toast.error(err?.response?.data?.message)
        }
    }
    return (
        <>
            <Header />
            <div className="max-w-sm mx-auto">
                <div className="mb-5">
                    <label
                        htmlFor="email"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                        Your email
                    </label>
                    <input
                        type="email"
                        id="email"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="name@flowbite.com"
                        required=""
                        onChange={(e) => setUserDetails(prev => ({ ...prev, email: e.target.value }))}
                    />
                </div>
                <div className="mb-5">
                    <label
                        htmlFor="password"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                        Your password
                    </label>
                    <input
                        type="password"
                        id="password"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        required=""
                        onChange={(e) => setUserDetails(prev => ({ ...prev, password: e.target.value }))}
                    />
                </div>
                <div className='flex justify-between'>

                    <button
                        onClick={loginSubmitHandler}
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                        Submit
                    </button>
                    <span className='text-blue-600 font-bold underline' onClick={() => navigate('/signup')}>New User??</span>
                </div>
            </div>
            <ToastContainer/>
        </>

    )
}

export default Login