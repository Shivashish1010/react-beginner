import React, { Component } from 'react'

class UserGreeting extends Component {

    constructor(){
        super()
    
        this.state = {
            isloggedIn : "parent"
        }

        this.changeMe = this.changeMe.bind(this)
    }

    changeMe(){
        if (this.state.isloggedIn === "parent") {
            this.setState({
                isloggedIn : "child now"
            })            
        } else {
            this.setState({
                isloggedIn : "parent"
            })
        }
    }
    
    render() {
        return(
        <div>
            <div> {this.state.isloggedIn} </div>
            <button onClick = {this.changeMe}>click me to change</button>
        </div>
        
        )
    }
}

export default UserGreeting
