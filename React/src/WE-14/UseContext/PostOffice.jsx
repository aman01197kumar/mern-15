import React, { createContext } from 'react'
import Ghar1 from './Ghar1'

export const postman = createContext()
const PostOffice = () => {
    const letter = 'chitthi ayi hai ayi hai chitthi ayi hai'
    return (
        <postman.Provider value={letter}>
            <Ghar1 />
        </postman.Provider>
    )
}

export default PostOffice