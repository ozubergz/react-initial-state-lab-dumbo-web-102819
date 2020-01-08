// your Bomb code here!
import React, { Component } from 'react';

class Bomb extends Component {
    constructor(props) {
        super()

        this.state = {
            secondsLeft: props.initialCount
        }
    }

    componentDidMount() {
        this.interval = setInterval(this.timer.bind(this), 1000)
    }
    
    componentWillUnmount() {
        clearInterval(this.interval)
    }

    timer() {
        this.setState({
            secondsLeft: this.state.secondsLeft - 1
        });

        if(this.state.secondsLeft === 0) clearInterval(this.interval)
    }

    render() {
        return (
            <div>
                {this.state.secondsLeft === 0 ? <div>Boom!</div> : <div>{this.state.secondsLeft} seconds left before I go boom!</div>}
            </div>
        )
    }
}

export default Bomb