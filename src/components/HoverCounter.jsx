import React, { Component } from 'react'
import withCounter from './withCounter';
import { Card } from '@material-ui/core';
class HoverCounter extends Component {
    render() {
        const{ count,incrementCount }=this.props
        return (
            <Card>
            <div>
                <h2 onMouseOver={incrementCount}>{this.props.name} {this.props.names}Hovered {count} times</h2>
            </div>
            </Card>
        )
    }
}
export default withCounter(HoverCounter,10)