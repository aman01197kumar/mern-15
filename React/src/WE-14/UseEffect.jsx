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

    // console.log(count);
    // useEffect(() => {
    //     console.log(count);

    //     return ()=>{
    //         console.log('helloww');
    //         // if(count===5)
    //         //     console.log('cleanup done!!!');
    //     }
    // }, [])
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