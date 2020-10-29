import React from 'react'

// function FRinput() {
//     return (
//         <div>
//             <input></input>
//         </div>
//     )
// }

const FRinput = React.forwardRef((props, ref) => {
    return(
        <div>
            <input ref={ref}>
            </input>
        </div>
    )
})


export default FRinput
