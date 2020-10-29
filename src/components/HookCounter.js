import React, { useState } from 'react'

function HookCounter() {

   const initialState = 0
   let [count, setCount] = useState(initialState)

    return (
        <div>
            <div> {count} </div>
            <button onClick = {() => setCount(count => count+1)}> increment </button>
            <button onClick = {() => setCount(count => count-1)}> decrement </button>
            <button onClick = {() => setCount(count => initialState)}> reset </button>
        </div>
    )
}

export default HookCounter
