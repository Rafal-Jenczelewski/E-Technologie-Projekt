import React, {Component} from 'react'
import {Text, View, StyleSheet} from 'react-native'

class ProfileScreen extends Component {
    render() {
        return <View fits style={styles.container}><Text>Profile</Text></View>
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default ProfileScreen