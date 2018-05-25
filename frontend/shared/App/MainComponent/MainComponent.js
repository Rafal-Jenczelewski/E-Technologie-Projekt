import React, {Component} from 'react'
import {StyleSheet, View} from 'react-native'
import {connect} from 'react-redux'

let {FBLogin, FBLoginManager} = require('react-native-facebook-login')

FBLoginManager.loginWithPermissions(["email","user_friends"], function(error, data){
    if (!error) {
        console.log("Login data: ", data);
    } else {
        console.log("Error: ", error);
    }
});

class MainComponent extends Component {
    render() {
        return <View style={styles.container}>
            <FBLogin style={styles.btn}/>
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
    btn: {
        alignSelf: 'center',
        marginBottom: 10
    }
});

export default MainComponent;