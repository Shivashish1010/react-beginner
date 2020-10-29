import React, { useState,useEffect } from 'react'

function HookArray() {


    const [numbers, setNumber] = useState([])

    const [query, setQuery] = useState("")

    const addThis = (e) => {
        console.log(e.target.value)
        setQuery(e.target.value)    
    }
    
    const newNumber = (e) => {
        setQuery("")
        setNumber([...numbers,query])
    }

    const resetAll = (e) =>{
        setNumber([])
    }

    const removeLast = (e) =>{
        setNumber(numbers.slice(0,numbers.length-1))
    }

    return (
        <div>
            <input value={query} type="text" onChange = {addThis}></input>
            <button onClick={newNumber}>add number</button>
            <button onClick={resetAll}>reset everything</button>
            <button onClick={removeLast}>remove last element</button>
            {numbers.map(number => <li> {number} </li>)}
        </div>
    )
}

export default HookArray