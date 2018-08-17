import React, { Component } from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router, Link} from 'react-router-dom'
import Nombre from './Nombre'
import AppRoutes from './AppRoutes'
import './App.css';

class App extends Component {
  render() {
    return (
        <Router>
          <div className="App">
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <Nombre className="App-title" name="Nacho"/>
            </header>
              <li><Link to={"/"}>Home</Link></li>
              <li><Link to={"/about"}>About</Link></li>
              <li><Link to={"/incrementCounter"}>Increment Counter</Link></li>
              <li><Link to={"/decrementCounter"}>Decrement Counter</Link></li>
              <AppRoutes/>
          </div>
        </Router>
    );
  }
}

export default App;
