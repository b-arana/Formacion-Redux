import React from 'react';
import {Route, Switch} from 'react-router-dom'
import Home from "./features/home/home";
import About from "./features/about/about";
import {IncrementCounter} from "./features/counter/IncrementCounter";
import {DecrementCounter} from "./features/counter/DecrementCounter";



export default (props) => <Switch>
    <Route exact path="/" component={Home}/>
    <Route exact path="/about" component={About}/>

    <Route exact path="/incrementCounter" component={IncrementCounter}
    />

    <Route exact path="/decrementCounter" component={DecrementCounter}
    />


</Switch>;