import React, { PureComponent } from 'react'

class PureComp extends PureComponent {
    render() {
        console.log("pure render")
        return (
            <div>
               pure component {this.props.name}
            </div>
        )
    }
}

export default PureComp
