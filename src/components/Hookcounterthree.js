import React, { useState } from 'react'

function Hookcounterthree() {

    const [name, setName] = useState({firstName:'',lastName:''})
    return (
        <div>
            <form>
                <input type="text" value={name.firstName} onChange = { e => setName({ ...name, firstName: e.target.value})}>
                </input>
                <input type="text" value={name.lastName} onChange = { e => setName({ ...name, lastName: e.target.value})}>
                </input>
                <div>{name.firstName}</div> 
                <div>{name.lastName}</div>
            </form>
        </div>
    )
}

export default Hookcounterthree
