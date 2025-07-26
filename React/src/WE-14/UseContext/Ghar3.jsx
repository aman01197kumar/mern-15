import React, { useContext } from 'react'
import { postman } from './PostOffice'

const Ghar3 = () => {
    const letter = useContext(postman)
    return (
        <div>Bhai tumhari chittli me sandesh : {letter}</div>
    )
}

export default Ghar3