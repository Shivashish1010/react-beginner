import React,{useState,useEffect} from 'react'

function HookInterval() {

    const [count, setcount] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setcount(count => count+1)
        },1000) 
        
        return() => {
            clearInterval(interval)
        }

    })
    return (
        <div>
            {count}
        </div>
    )
}

export default HookInterval
