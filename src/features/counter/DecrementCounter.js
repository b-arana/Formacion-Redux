import React, { Component } from 'react';
import { connect } from 'react-redux'
import Button from '../../molecules/Button'
import {decrement} from './CounterActions'


class DecrementCounterComponent extends Component{
    render() {

        return (
            <React.Fragment>
                <h1>{this.props.counter}</h1>
                <Button name="Decrement" onClick={this.props.decrement}/>
            </React.Fragment>
        )
    }


}

const mapStateToProps = state => ({
    counter: state
})
const mapDispatchToProps = {
    decrement}


export const DecrementCounter = connect(mapStateToProps, mapDispatchToProps)(DecrementCounterComponent)