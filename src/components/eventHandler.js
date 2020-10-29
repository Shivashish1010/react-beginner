import React, { Component } from 'react'

class EventHandler extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             message : "hihihaha"
        }

        this.ComeOn = this.ComeOn.bind(this)
    }
    
    ComeOn (){
        this.setState({
            message : "sup bois i have changed"
        })
    }

    // ComeOn = () => {
    //     this.setState({
    //         message : "byebye"
    //     })
    // }
    
    render() {
        return (
            <div>
                <div>{this.state.message}</div>
                <button onClick={this.ComeOn}>yoyo</button>
            </div>
        )
    }
}

export default EventHandler
