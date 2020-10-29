import React, { Component } from 'react'

class LifecycleB extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             name : "shivashish"
        }
        console.log("constructor of lifecycleB")
    }

    static getDerivedStateFromProps(props,state){
        console.log("getderived wala lifecycleB")
        return null
    }

    componentDidMount(){
        console.log("componentdiodmo8nt lifecycleB")
    }
    
    shouldComponentUpdate(){
        console.log("shouldComponentUpdate lifecycleB")
        return true
    }

    getSnapshotBeforeUpdate(prevProps,prevState){
        console.log("getSnapshotBeforeUpdate lifecycleB")
        return null
    }

    componentDidUpdate(){
        console.log("componentdidUpdate lifecycle B")
    }

    render() {
        console.log("render lifecycleB")
        return (
            <div>
                hi from lifecycleB
            </div>
        )
    }
}

export default LifecycleB
