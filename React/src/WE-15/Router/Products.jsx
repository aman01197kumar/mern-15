import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Products = () => {
    const [value, setValue] = useState('')
    const navigate = useNavigate()

    const onSelectHandler = (e) => {
        navigate(`/product-detail/${e.target.value}`)
    }
    return (
        <div>
            <select onChange={(e) => onSelectHandler(e)}>
                <option value="Mongo">Mongo</option>
                <option value="Express">Express</option>
                <option value="React">React</option>
                <option value="Node">Node</option>
            </select>
        </div>
    )
}

export default Products