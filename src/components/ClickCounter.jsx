import React, { Component } from 'react'
import withCounter from './withCounter';
class ClickCounter extends Component {
    render() {
        const{ count,incrementCount,count_dec,decrementCount }=this.props
        return (
            <div>
                <button onClick={incrementCount}>{this.props.name} Increments {count} times</button>
                <button onClick={decrementCount}>{this.props.names} Decrements {count_dec} times</button>
            </div>
        )
    }
} 
export default withCounter(ClickCounter,5)