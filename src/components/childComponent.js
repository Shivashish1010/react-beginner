import React from 'react'

function ChildComponent(props) {
    return (
        <div>
            <button onClick = {() => props.greetHandler('child')}>greet the parent</button>
        </div>
    )
}

export default ChildComponent
