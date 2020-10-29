import React, { Component } from 'react'

class Welcome extends Component{
	render(){
		const {name,city} = this.props
		return <div> {name} lives in {city} </div>
	}
}

export default Welcome