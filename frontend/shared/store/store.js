import React from "react";
import {applyMiddleware, createStore, combineReducers} from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'

import {routes, markers} from '../reducers/reducers'

const reducers = combineReducers({routes, markers});
const store = createStore(reducers, applyMiddleware(thunk, logger));

export default store;