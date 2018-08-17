import React, { Component } from 'react';
import { connect } from 'react-redux'
import Button from '../../molecules/Button'
import {increment} from './CounterActions'

class IncrementCounterComponent extends Component{
    render() {
        console.log(this.props)
        return (
            <React.Fragment>
                <h1>{this.props.counter}</h1>
                <Button name="Increment" onClick={this.props.increment}/>
            </React.Fragment>
        )
    }


}

const mapStateToProps = ({counter}) => ({

    counter
})
const mapDispatchToProps = {
    increment}


export const IncrementCounter = connect(mapStateToProps, mapDispatchToProps)(IncrementCounterComponent)