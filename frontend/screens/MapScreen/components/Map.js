import React, {Component} from 'react'
import {View, StyleSheet} from 'react-native'
import MapView, {Marker, Polyline} from 'react-native-maps'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

import {getMarkers, getRoutes} from '../../../shared/actions/actions'

class Map extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getRoutes();
        this.props.getMarkers();
    }

    render() {
        let markers = this.props.markers.map(m => (<Marker title={m.name} key={m.id} coordinate={m.coordinate}/>));
        let routes = this.props.routes.map(m => (<Polyline key={m.id} coordinates={m.coordinates} strokeWidth={4} title={m.name}/>));
        let routeMarkers = this.props.newRouteMarkers.map(m => (<Marker key={m.id} coordinate={m.coordinate} pinColor={'#0000FF'}/>));
        return <View style={styles.container}><MapView style={styles.map}
            initialRegion={{
                latitude: 51.1078852,
                longitude: 17.0385376,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
            }} onLongPress={this.props.onLongPress}>{markers}{routeMarkers}{routes}</MapView></View>
    }
}

function mapStateToProps(state) {
    return {
        markers: state.markers,
        routes: state.routes
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        getMarkers: getMarkers,
        getRoutes: getRoutes
    }, dispatch)
}

const styles = StyleSheet.create({
    container: {
        //...StyleSheet.absoluteFillObject,
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

export default connect(mapStateToProps, mapDispatchToProps)(Map)