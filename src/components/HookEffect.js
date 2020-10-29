import React, {useState, useEffect} from 'react'

function HookEffect() {

    const [count, setcount] = useState(0)
    const [name, setname] = useState("")

    useEffect(() => {
        console.log("updating document title")
        document.title = `you clicked ${count} times`
    },[count])


    return (
        <div>
            <input type='text' value={name} onChange={e => setname(e.target.value)}></input>
            <button onClick = {() => setcount(count+1)}>click {count} times</button>
        </div>
    )
}

export default HookEffect
