import React, { Component } from 'react';
import Button from '../../molecules/Button'

class IncrementCounter extends Component {


render (){

    return (
        <React.Fragment>
            <h1>{this.props.counter}</h1>
            <Button name="Decrement" onClick={this.props.onClick}/>

        </React.Fragment>
    )
}

}
export default IncrementCounter;