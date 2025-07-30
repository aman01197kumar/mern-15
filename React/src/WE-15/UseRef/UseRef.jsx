import React, { useRef, useState } from 'react'

const UseRef = () => {
    // const [changeColor, setChangeColor] = useState('red')
    // const colorRef = useRef('red')
    const openFile = useRef()

    // console.log(colorRef.current,'ref');
    const changeColorHandler = () => {
        // setChangeColor('yellow')
        colorRef.current.style.backgroundColor = 'yellow'
        // console.log(colorRef.current.style.backgroundColor);
    }
    console.log('helooe');
    return (
        <div>
            {/* <h1 ref={colorRef}>Change my color</h1>
            <button onClick={changeColorHandler}>change color</button> */}
            <div style={{ backgroundColor: 'bisque', height: '5rem', width: '5rem' }} onClick={() => openFile.current.click()}></div>
            <input type="file" onChange={(e) => console.log(e.target.files[0])} ref={openFile} />
        </div>
    )
}

export default UseRef