import React, { Component } from 'react'

class Counter extends Component{

    constructor(){
        super()
        this.state = {
            count : 0
        }
    }

    increment(){
        this.setState(prevState => ({
            count : prevState.count+1
        }))
    }
    
    increment5(){
        this.increment()
        this.increment()
        this.increment()
        this.increment()
        this.increment()
    }

    reset(){
        this.setState({
            count : 0
        })
    }
    
    render(){

		return (
        <div> 
            <h1> {this.state.count} </h1>
            <button onClick = {() => this.increment5()}>increment button</button>
            <button onClick = {() => this.reset()}>reset</button>
        </div>
        )
	}
}

export default Counter