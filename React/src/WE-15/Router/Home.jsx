import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate()
  return (
    <ul>
      <li onClick={()=>navigate('contact')}>Contact</li>
      <li onClick={()=>navigate('products')}>Products</li>
    </ul>
  )
}

export default Home