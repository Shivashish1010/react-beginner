import { render } from '@testing-library/react'
import React, { Component } from 'react'

const clickHandler = () => <div>on screen</div>

class FunctionClick extends Component{

    clickHandler(){
        console.log("working")
    }

    render(){
    return(
        <div>
            <button onClick={this.clickHandler}>click here</button>
        </div>
        )
    }
}
export default FunctionClick