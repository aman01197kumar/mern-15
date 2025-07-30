import React from 'react'
import { useParams } from 'react-router-dom'

const ProductDetail = () => {
    const product = useParams()
    console.log(product, 'prod');
    return (
        <div>ProductDetail:{product.id}</div>
    )
}

export default ProductDetail