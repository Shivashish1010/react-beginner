import React, { Component } from 'react'
import LifecycleB from './LifecycleB'

class LifecycleA extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             name : "shivashish"
        }
        console.log("constructor of lifecycle A")
    }

    static getDerivedStateFromProps(props,state){
        console.log("getderived wala lifecycle A")
        return null
    }

    componentDidMount(){
        console.log("componentdiodmo8nt lifecycle A")
    }

    shouldComponentUpdate(){
        console.log("shouldComponentUpdate lifecycleA")
        return true
    }

    getSnapshotBeforeUpdate(prevProps,prevState){
        console.log("getSnapshotBeforeUpdate lifecycleA")
        return null
    }

    componentDidUpdate(){
        console.log("componentdidUpdate lifecycle A")
    }

    changeMe = () => {
        this.setState({
            name : "newton"
        })
    }
    

    render() {
        console.log("render lifecycle A")
        return (
            <div>
                hi from lifecycle A
                <div>{this.state.name}</div>
                <button onClick = {this.changeMe}>change name</button>
                <LifecycleB>Lifecycle B</LifecycleB>
            </div>
        )
    }
}

export default LifecycleA
