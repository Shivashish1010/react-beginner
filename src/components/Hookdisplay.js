import React,{ useState} from 'react'
import HookMouse from './HookMouse'

function Hookdisplay() {

    const [display, setdisplay] = useState(true)

    return (
        <div>
            <button onClick={() => setdisplay(!display)}>toggle the display</button>
            {display && <HookMouse></HookMouse>}
        </div>
    )
}

export default Hookdisplay
