import React, { useMemo, useState } from 'react'
import ChildComponent from '../UseCallback/ChildComponent'

const UseMemo = () => {
    const [count, setCount] = useState(0)

    // const sum = useMemo(() => {
    //     console.log('rendering sum');
    //     let totalPrice = 0
    //     for (let i = 0; i < 1000000000; i++) {
    //         totalPrice += i
    //     }
    //     return totalPrice
    // }, [])
    return (
        <div>
            <h2>{count}</h2>
            <button onClick={() => setCount(count + 1)}>click me</button>
            <h2>{sum}</h2>
        </div>
    )
}

export default UseMemo