import React from 'react'
const withCounter = (WrappedComponent,number) => {
    class WithCounter extends React.Component {
        constructor(props) {
            super(props)

            this.state = {
                count: 0,
                count_dec: 0
            }
        }
        incrementCount = () => {
            this.setState(prevState => {
                return { count: prevState.count + number }
            })
        }
        decrementCount = () => {
            this.setState(prevState => {
                return { count: prevState.count - number }
            })
        }
        
        render() {
            console.log(this.props.names)
            return <WrappedComponent name='Shahazad' 
            count={this.state.count}
            incrementCount={this.incrementCount}
            decrementCount={this.decrementCount}

            {...this.props} />
        }
    }
    return WithCounter
}
export default withCounter