import React, {Component} from 'react'
import {Text, View, StyleSheet, CheckBox, Button} from 'react-native'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {getRoutes, getMarkers} from '../../actions/actions'
import {resetUserInfo} from '../../actions/actions'
import {setGetOthers} from './actions/actions'

let {FBLogin} = require('react-native-facebook-login')

class ProfileScreen extends Component {
    constructor(props) {
        super(props);

        this.onOwnedOnlyChange = this.onOwnedOnlyChange.bind(this);
        this.onRefreshClick = this.onRefreshClick.bind(this);
        this.onLogout = this.onLogout.bind(this);
    }

    onOwnedOnlyChange(e) {
        this.props.setGetOthers(e)
    }

    onRefreshClick() {
        this.props.getMarkers();
        this.props.getRoutes();
    }

    onLogout() {
        this.props.resetToken();
    }

    render() {
        return <View fits style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>Logged as: {this.props.name}</Text>
                <FBLogin containerStyle={styles.fb}
                         onLogout={this.onLogout}/>
            </View>
            <View style={styles.ownedOnlyView}><Text>Get others objects</Text>
                <CheckBox value={this.props.getOthers} onValueChange={this.onOwnedOnlyChange}/></View>
            <Button title={"Refresh"} onPress={this.onRefreshClick}/>
        </View>
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    header: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    headerText: {
        fontSize: 15,
        fontWeight: 'bold'
    },
    ownedOnlyView: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: "100%"
    },
    fb: {
        height: 40,
        margin: 5
    }
});

function mapStateToProps(state) {
    return {
        getOthers: state.getOthers,
        name: state.userInfo.name
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        getMarkers: getMarkers,
        getRoutes: getRoutes,
        resetToken: resetUserInfo,
        setGetOthers: setGetOthers
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileScreen)