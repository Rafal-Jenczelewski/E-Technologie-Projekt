import React, {Component} from 'react'
import {View, StyleSheet} from 'react-native'
import MapView, {Marker, LatLng} from 'react-native-maps'

function jsonify(o){
    var seen=[];
    var jso=JSON.stringify(o, function(k,v){
        if (typeof v =='object') {
            if ( seen.indexOf(v) != -1 ) { return '__cycle__'; }
            seen.push(v);
        } return v;
    });
    return jso;
};

class MapScreen extends Component {
    constructor(props) {
        super(props);

        this.state = {markers: []}

        this.onLongPressHandler = this.onLongPressHandler.bind(this);
    }

    onLongPressHandler(e) {
        let cord = e.nativeEvent.coordinate;
        this.setState((oldState) => ({markers: [...oldState.markers, {coordinate: cord}]}))
    }


    render() {
        let markers = this.state.markers.map(m => (<Marker title={"Kurtwa"} coordinate={m.coordinate}/>));
        return <View style={styles.container}><MapView style={styles.map}
            initialRegion={{
                latitude: 51.1078852,
                longitude: 17.0385376,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
            }} onLongPress={this.onLongPressHandler}>{markers}</MapView></View>
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
    marker: {
        ...StyleSheet.absoluteFillObject
    },
});

export default MapScreen