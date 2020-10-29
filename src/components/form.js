import React, { Component } from 'react'

class Form extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             username : '',
             choice : "js"
        }

        this.handleUsername = this.handleUsername.bind(this)
    }

    handleUsername(event){
        this.setState({
            username : event.target.value
        })
    }

    handleChoices = (event) => {
        this.setState({
            choice : event.target.value
        })
    }

    handleSubmit = (event) => {
        alert(`your name is ${this.state.username} and your language is ${this.state.choice}`)
        event.preventDefault()
    }
    
    render() {
        return (
            <form onSubmit = {this.handleSubmit}>
                <div>
                    <label>name </label>
                    <input type="text" value={this.state.username} onChange={this.handleUsername}></input>

                    <label>choose 1</label>
                    <select value={this.state.choice} onChange={this.handleChoices}>
                        <option value="react">react</option>
                        <option value="python">python</option>
                        <option value="js">js</option>
                    </select>
                </div>
                <button type="submit">submit</button>
            </form>
        )
    }
}

export default Form
