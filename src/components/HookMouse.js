import React, {useEffect, useState} from 'react'

function HookMouse() {

    const [x, setx] = useState(0)
    const [y, sety] = useState(0)


    const logMousePos = (e) => {
        setx(e.clientX)
        sety(e.clientY)
    }
    
    useEffect(() => {
    console.log("useeffect");
    window.addEventListener('mousemove',logMousePos)

    // return() => {
    //     console.log("cleaning up")
    //     window.removeEventListener('mousemove',logMousePos)
    // }

    }, [])

    return (
        <div>
            display here <br></br>
            {x} {y}
        </div>
    )
}

export default HookMouse
