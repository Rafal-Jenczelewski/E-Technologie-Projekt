import React, {Component} from 'react'
import {View, Button, Text,  StyleSheet} from 'react-native'

class CommentsScreen extends Component {
    static navigationOptions = {
        header: null
    };

    render() {
        let coords =  this.props.marker.coordinate ? [this.props.marker.coordinate] : this.props.marker.coordinates;
        coords = coords.map(e => <Text key={e.latitude + e.longitude}>Lat: {e.latitude} Long: {e.longitude}</Text>);

        return <View style={styles.container}>
            <Button onPress={() => this.props.navigation.navigate('List')} title={'Wróc'}/>
            <View style={styles.main}>
                <Text style={styles.header}>{this.props.marker.name}</Text>
                <Text>{this.props.marker.description}</Text>
                <View>{coords}</View>
            </View>
        </View>
    }
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
    },
    main: {
        marginTop: 10,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        width: '95%',
        marginRight: 'auto',
        marginLeft: 'auto',
        backgroundColor: '#FFA'
    },
    header: {
        fontWeight: 'bold',
        fontSize: 20
    }
})

export default CommentsScreen;