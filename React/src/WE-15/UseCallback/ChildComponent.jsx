import React from 'react'

const ChildComponent = ({myName}) => {
    console.log('child rerendering!!!');
    return (
        <div>ChildComponent</div>
    )
}

export default React.memo(ChildComponent)