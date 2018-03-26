import React from 'react';
import store from '../store/store'
import TabNavigator from './TabNavigator/TabNavigator'
import {Provider} from "react-redux";

export default class App extends React.Component {
    render() {
        return <Provider store={store}><TabNavigator/></Provider>
    }
}
