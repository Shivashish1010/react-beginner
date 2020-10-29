import React, { Component } from 'react'
import FRinput from './FRinput'

class FRparent extends Component {

    constructor(props) {
        super(props)
    
        this.myRef = React.createRef()
        this.clickHandler = this.clickHandler.bind(this)
    }

    clickHandler(){
        this.myRef.current.focus()
    }
    
    render() {
        return (
            <div>
                <FRinput ref={this.myRef}></FRinput>
                <button onClick={this.clickHandler}>focus button</button>
            </div>
        )
    }
}

export default FRparent
