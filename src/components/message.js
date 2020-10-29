import React, { Component } from 'react'

class Message extends Component{

    constructor(){
        super()
        this.state = {
            message: 'welcome visitor'
        }
    }

    // changeMessage(){
    //     this.setState ({
    //         message: "thankyou"
    //     })
    // }

	render(){
		return (
        <div>
            <h1> {this.state.message} </h1>
            <button onClick={ () => this.setState({message : "yoyo"})}>subscribe</button>
        </div>)
	}
}

export default Message