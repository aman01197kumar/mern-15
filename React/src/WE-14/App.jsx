// import React, { useState } from 'react'
// import ChildComponent from './ChildComponent'

// const App = () => {
//     //variable_declaration [variable,function] = useState(initialValue)===>syntax
//     //let count = 10
//     // count++

//     // const [count, setCount] = useState(0)
//     const [toggle, setToggle] = useState(false)
//     const name = "Aman"

//     // let count = 10

//     // const incrementHandler = () => {
//     //     if (count < 10)
//     //         setCount(count => count + 1)
//     // }

//     // const decrementHandler = () => {
//     //     if (count > 0)
//     //         setCount(count => count - 1)
//     // }
//     const toggleButtonHandler = () => {
//         setToggle(!toggle)
//     }
//     return (
//         <>
//             {/* <h1>{count}</h1>
//             <button onClick={incrementHandler}>increment</button>
//             <button onClick={decrementHandler}>decrement</button> */}
//             <h1>{toggle ? 'abc' : 'xyz'}</h1>
//             <button onClick={toggleButtonHandler}>toggle button</button>
//             <ChildComponent name = {name}/>
//         </>
//     )
// }

// export default App

import React from 'react'
import UseEffect from './UseEffect'
import Button from './Button'
import PostOffice from './UseContext/PostOffice'

const App = () => {
    const buttonData = [{
        title: 'Subscribe',
        backgroundColor: 'red'
    },
    {
        title: 'Cart',
        backgroundColor: 'aqua'
    },
    {
        title: 'logout',
        backgroundColor: 'red'
    },
    {
        title: 'apply now',
        backgroundColor: 'green'
    },]
    return (
        // <div><UseEffect/></div>
        <>
            {/* <Button title="subscribe" backgroundColor="red" />
            <Button title="login" backgroundColor="yellow" />
            <Button title="cart" backgroundColor="pink" />
            <Button title="logout" backgroundColor="aqua" /> */}
            {/* {
                buttonData.map(({ title, backgroundColor }) => (
                    <Button key={title} title={title} backgroundColor={backgroundColor} />
                ))
            } */}
            <PostOffice/>
        </>
    )
}

export default App