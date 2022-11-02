import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import { combineReducers } from 'redux'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import employees from './reducers/employees'
import formState from './reducers/formState'
import appState from './reducers/appState'
import login from './reducers/login';
import App from './App'

/*
import events from './reducers/events'
import registrations from './reducers/registrations'
import * as serviceWorker from './serviceWorker';
*/

const appReducer = combineReducers({formState,appState,employees, login})
let store = createStore( appReducer )

render(
    <Provider store={store}>
    <App />
    </Provider>,
    document.getElementById('root')
);

