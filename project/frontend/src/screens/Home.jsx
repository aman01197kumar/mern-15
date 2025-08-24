import React from 'react'
import Header from '../components/Header'
import axios from 'axios'

const Home = () => {

    const token = localStorage.getItem('token')
    const authorizeUser = async () => {
        try {

            const response = await axios.get('http://localhost:3000/validate', {
                headers: {

                    Authorization: `Bearer ${token}`
                }
            })
            console.log(response);
        }
        catch (err) {
            console.log(err);
        }
    }
    return (
        <div>
            <Header />
            <button onClick={authorizeUser}>Collect user info</button>
        </div>
    )
}

export default Home