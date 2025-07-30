import React, { useEffect, useState } from 'react'

const UseEffect = () => {
    const [count, setCount] = useState(0)
    // const [increment, setIncrement] = useState(0)

    //mounting phase
    // useEffect(() => {
    //     console.log('i am running');
    // }, [])

    //parameterised/dependency based(updating phase)
    // useEffect(() => {
    //     console.log('i am running');
    // }, [count])

    // useEffect(() => {
    //     console.log('component mounted!!');

    //     return () => {
    //         if (count === 5) {
    //             console.log('cleanup done!!!');
    //         }
    //     }
    // }, [count])
    return (
        <>

            <div>{count}</div>
            <button onClick={() => setCount(prev => prev + 1)}>count</button>
            {/* <div>{increment}</div>
            <button onClick={() => setIncrement(prev => prev + 1)}>increment</button> */}
        </>
    )
}

export default UseEffect