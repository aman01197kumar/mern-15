import React, { useCallback, useState } from 'react'
import ChildComponent from './ChildComponent'

const UseCallback = () => {
  const [count, setCount] = useState(0)

  // const myName = () => 'Aman'

  const myName = useCallback(() => { 'Aman' }, [])
  return (
    <>
      <div><ChildComponent myName={myName} /></div>
      <button onClick={() => setCount(count + 1)}>click me</button>
      <h3>{count}</h3>
    </>
  )
}

export default UseCallback