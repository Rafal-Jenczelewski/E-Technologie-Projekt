import React, {Component} from 'react'
import {Text, View, StyleSheet, CheckBox, Button} from 'react-native'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import {getRoutes, getMarkers} from '../../shared/actions/actions'

class ProfileScreen extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isOwnedOnly: false
        };

        this.onOwnedOnlyChange = this.onOwnedOnlyChange.bind(this);
        this.onRefreshClick = this.onRefreshClick.bind(this);
    }

    onOwnedOnlyChange() {
        this.setState(state => ({isOwnedOnly: !state.isOwnedOnly}))
    }

    onRefreshClick() {
        this.props.getMarkers();
        this.props.getRoutes();
    }

    render() {
        return <View fits style={styles.container}>
            <View style={styles.ownedOnlyView}><Text>Pobierz obiekty innych użytkowników:</Text>
            <CheckBox value={this.state.isOwnedOnly} onValueChange={this.onOwnedOnlyChange}/></View>
            <Button title={"Odśwież"} onPress={this.onRefreshClick}/>
        </View>
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    ownedOnlyView: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'flex-start',
        width: "100%"
    }
});

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        getMarkers: getMarkers,
        getRoutes: getRoutes
    }, dispatch)
}

export default connect(null, mapDispatchToProps)(ProfileScreen)