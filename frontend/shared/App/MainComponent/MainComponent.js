import React, {Component} from 'react'
import {StyleSheet, View} from 'react-native'
import {connect} from 'react-redux'

let {FBLogin} = require('react-native-facebook-login')

class MainComponent extends Component {
    render() {
        return <View style={styles.container}>
            <FBLogin/>
        </View>
    }
}

const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
    }
});

export default MainComponent;