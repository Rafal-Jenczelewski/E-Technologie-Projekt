import React, {Component} from 'react'
import {Text, View, StyleSheet} from 'react-native'

class MapScreen extends Component {
    render() {
        return <View style={styles.container}><Text>Mapa</Text></View>
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

export default MapScreen