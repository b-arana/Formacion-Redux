import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux'
import {modifyCounter} from './features/counter/CounterReducer'
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, applyMiddleware, compose } from "redux";
import { createEpicMiddleware } from "redux-observable";
import { counterEpic } from "./features/counter/CounterEpics";

const epicMiddleware = createEpicMiddleware();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    modifyCounter,
    composeEnhancers(applyMiddleware(epicMiddleware))
);
epicMiddleware.run(counterEpic);
ReactDOM.render(
    <Provider store={store}>
            <App/>
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();

