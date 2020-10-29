import React from 'react'

function MemoComp({name}) {
    console.log("memo render")
    return (
        
        <div>
            {name}
        </div>
    )
}

export default MemoComp
