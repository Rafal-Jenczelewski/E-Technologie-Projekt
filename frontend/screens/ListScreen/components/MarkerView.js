import React, {Component} from 'react'
import {View, Text, StyleSheet, TouchableHighlight, CheckBox, ScrollView} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import {changeIsPublic} from '../requsts'
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
        this.props.onExpand(this.props.marker);
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
                borderColor: 'blue',
                borderWidth: 2,
                borderRadius: 5,
                height: 80,
                padding: 10,
                flex: 1,
                width: '90%',
                marginLeft: 'auto',
                marginRight: 'auto',
                marginTop: 5,
                marginBottom: 5
            },
            headerView: {
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
                width: '100%',
            },
            name: {
                fontWeight: 'bold',
                fontSize: 20
            },
            publicView: {
                flexDirection: "row",
                justifyContent: "flex-end",
                width: "100%"
            }
        });

        let publicCheckbox = null;

        if (this.props.marker.ownerID == this.props.userID) {
            publicCheckbox =
                <View style={styles.publicView}><Text>Publiczny:</Text><CheckBox value={this.state.isPublic}
                                                                                 onValueChange={this.onPublicChange}/></View>
        }

        return <View
            style={styles.container}>
            <View style={styles.headerView}><TouchableHighlight onPress={this.onExpand}><Text
                style={styles.name}>{this.props.marker.name}</Text></TouchableHighlight>
            </View>
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