import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import {modifyCounter} from './features/counter/CounterReducer'
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    modifyCounter,
    composeEnhancers(applyMiddleware())
);
// const store = createStore(modifyCounter)
console.log(store.getState())
ReactDOM.render(
    <Provider store={store}>
            <App/>
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();

