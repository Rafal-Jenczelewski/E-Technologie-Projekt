import React from 'react';
import store from './Provider/Provider'
import TabNavigator from './TabNavigator/TabNavigator'
import {Provider} from "react-redux";

export default class App extends React.Component {
    render() {
        return <Provider store={store}><TabNavigator/></Provider>
    }
}
