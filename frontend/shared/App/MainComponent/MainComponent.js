import React, {Component} from 'react'
import {StyleSheet, View} from 'react-native'
import TabNavigator from '../TabNavigator/TabNavigator'
import {resetUserToken, setUserToken} from './actions'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

let {FBLogin, FBLoginManager} = require('react-native-facebook-login')

FBLoginManager.loginWithPermissions(["email", "user_friends"], function (error, data) {
    if (!error) {
        console.log("Login data: ", data);
    } else {
        console.log("Error: ", error);
    }
});

class MainComponent extends Component {
    constructor(props) {
        super(props);

        this.onLogin = this.onLogin.bind(this);
        this.onLogout = this.onLogout.bind(this);
    }

    onLogin(token) {
        this.props.setToken(token)
    }

    onLogout() {
        this.props.resetToken();
    }

    render() {
        let comp = <View style={styles.container}>
            <FBLogin style={styles.btn}
                     permissions={["email","user_friends"]}
                     onLogin={(data) => this.onLogin(data.credentials.token)}
                     onLogout={() => this.onLogout()}
                     onLoginFound={function(data){
                         console.log("Existing login found.");
                         console.log(data);
                     }}
                     onLoginNotFound={function(){
                         console.log("No user logged in.");
                     }}
                     onError={function(data){
                         console.log("ERROR");
                         console.log(data);
                     }}
                     onCancel={function(){
                         console.log("User cancelled.");
                     }}
                     onPermissionsMissing={function(data){
                         console.log("Check permissions!");
                         console.log(data);
                     }}/>
        </View>;

        if (this.props.token !== null)
            comp = <TabNavigator/>;

        return comp;
    }
}

const styles = StyleSheet.create({
    container: {
        // ...StyleSheet.absoluteFillObject,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
    },
    btn: {
        alignSelf: 'center',
        marginBottom: 10
    }
});

function mapStateToProps(state) {
    return {
        token: state.userToken
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        setToken: setUserToken,
        resetToken: resetUserToken
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(MainComponent);