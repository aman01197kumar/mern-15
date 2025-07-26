import React from 'react'

const ChildComponent = ({name}) => {
    // console.log(props.name, 'props');
    // const {name} = props
    console.log(name);
    return (
        <div>ChildComponent</div>
    )
}

export default ChildComponent