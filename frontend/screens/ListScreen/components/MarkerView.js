import React, {Component} from 'react'
import {View, Text, StyleSheet, TouchableHighlight, CheckBox,ScrollView} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import {changeIsPublic} from './requsts'
import {connect} from 'react-redux'

class MarkerView extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isPublic: props.isPublic
        };

        this.onExpand = this.onExpand.bind(this);
        this.onPublicChange = this.onPublicChange.bind(this);
    }

    onExpand() {
        this.props.onExpand(this.props.marker.id);
    }

    onPublicChange() {
        changeIsPublic(this.props.marker.id, !this.state.isPublic);
        this.setState(state => ({isPublic: !state.isPublic}))
    }

    render() {
        const styles = StyleSheet.create({
            container: {
                flexDirection: 'column',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
                borderColor: '#8CA19C',
                backgroundColor: '#F5C3A0',
                borderWidth: 2,
                height: this.props.expanded ? 250 : 100,
                padding: 10,
                flex: 1,
                width: '100%',
                marginTop: 5,
                marginBottom: 5
            },
            headerView: {
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
                height: 50,
                width: '100%',
            },
            name: {
                fontWeight: 'bold',
                fontSize: 20
            },
            descView: {
                height: 50
            },
            coordsView: {
                flexDirection: 'column',
                justifyContent: 'flex-start',
                alignItems: 'flex-start',
            },
            publicView: {
                flexDirection: "row",
                justifyContent: "flex-end",
                width: "100%"
            }
        });

        let moreInfo = null;
        let coordsView = null;
        let publicCheckbox = null;

        console.log('ownerID:');
        console.log(this.props.marker.ownerID);
        console.log('userID:');
        console.log(this.props.userID);
        if (this.props.marker.ownerID == this.props.userID) {
            publicCheckbox = <View style={styles.publicView}><Text>Publiczny:</Text><CheckBox value={this.state.isPublic} onValueChange={this.onPublicChange} /></View>
        }

        if (this.props.expanded) {
            let coords =  this.props.marker.coordinate ? [this.props.marker.coordinate] : this.props.marker.coordinates;
            coords = coords.map(e => <Text key={e.latitude + e.longitude}>Lat: {e.latitude} Long: {e.longitude}</Text>);

            moreInfo = (<View style={styles.descView}><Text>{this.props.marker.description}</Text></View>);
            coordsView = (<View style={styles.coordsView}>{coords}</View>)
        }

        return <View
            style={styles.container}>
            <View style={styles.headerView}><Text style={styles.name}>{this.props.marker.name}</Text>
                <TouchableHighlight onPress={this.onExpand}><Icon name={"expand"}/></TouchableHighlight>
            </View>
            {moreInfo}
            {coordsView}
            {publicCheckbox}
        </View>
    }
}

function mapStateToProps(state) {
    return {
        userID: state.userInfo.userID
    }
}

export default connect(mapStateToProps, null)(MarkerView);