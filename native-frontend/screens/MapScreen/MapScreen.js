import React, {Component} from 'react'
import {Text, View, StyleSheet} from 'react-native'
import MapView from 'react-native-maps'

class MapScreen extends Component {
    render() {
        return <View style={styles.container}><MapView style={styles.map}
            initialRegion={{
                latitude: 51.1078852,
                longitude: 17.0385376,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
            }}
        /></View>
    }
}

const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
        height: 400,
        width: 400,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    map: {
        ...StyleSheet.absoluteFillObject,
    },
});

export default MapScreen