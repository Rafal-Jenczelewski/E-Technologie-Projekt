import React, {Component} from 'react'
import {View, Text, StyleSheet, TouchableHighlight, CheckBox,ScrollView} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

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
        this.setState(state => ({isPublic: !state.isPublic}))
    }

    render() {
        const styles = StyleSheet.create({
            container: {
                flexDirection: 'column',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
                borderColor: '#0AA',
                borderWidth: 2,
                height: this.props.expanded ? 250 : 100,
                padding: 10
            },
            headerView: {
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
                height: 50,
                width: '100%'
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

        if (this.props.owned) {
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
            <View style={styles.headerView}><Text>{this.props.marker.name}</Text>
                <TouchableHighlight onPress={this.onExpand}><Icon name={"expand"}/></TouchableHighlight>
            </View>
            {moreInfo}
            {coordsView}
            {publicCheckbox}
        </View>
    }
}



export default MarkerView