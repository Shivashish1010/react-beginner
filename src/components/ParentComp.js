import React, { Component, PureComponent } from 'react'
import MemoComp from './MemoComp'
import PureComp from './PureComponent'
import RegularComponent from './RegularComponent'

class ParentComp extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             name : "shivashish"
        }
    }

    componentDidMount(){
        setInterval(() => {
            this.setState({
                name : "shivashish"
            })
        }, 2000)
    }
    
    render() {
        console.log("parent render")
        return (
            <div>
                parent component
                {/* <RegularComponent name={this.state.name}></RegularComponent>
                <PureComp name={this.state.name}></PureComp> */}

                <MemoComp name = {this.state.name}></MemoComp>
            </div>
        )
    }
}

export default ParentComp
