import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Home'
import Contactus from './Contactus'
import Products from './Products'
import ProductDetail from './ProductDetail'

const Navigation = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='contact' element={<Contactus />} />
                <Route path='products' element={<Products />} />
                <Route path='product-detail/:id' element={<ProductDetail />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Navigation