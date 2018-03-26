import React from "react";
import {applyMiddleware, createStore, combineReducers} from 'redux'

const reducers = combineReducers({a: (state = [], action) => {return {}}});
const store = createStore(reducers, applyMiddleware());

export default store;