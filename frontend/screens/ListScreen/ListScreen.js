import React, {Component} from 'react'
import {connect} from 'react-redux'
import {SectionList, View, Text, StyleSheet} from 'react-native'

import MarkerView from './components/MarkerView'

class ListScreen extends Component {
    constructor(props) {
        super(props);

        this.state = {
            sections: [],
        };
        
        this.onExpandPress = this.onExpandPress.bind(this);
    }

    spreadDataIntoState(data) {
        let ownData = data.markers.filter(e => e.owned).concat(data.routes.filter(e => e.isOwn));
        let publicMarkers = data.markers.filter(e => !e.owned);
        let publicRoutes = data.routes.filter(e => !e.owned);

        this.setState(() => ({
            sections: [
                {title: "Moje", data: ownData},
                {title: "Znaczniki", data: publicMarkers},
                {title: "Trasy", data: publicRoutes}
            ],
            expandedId: null
        }))
    }

    onExpandPress(id) {
        this.setState(state => {
            return {
                expandedId: state.expandedId === id ? null : id
            }
        })
    }
    
    componentDidMount() {
        this.spreadDataIntoState({
            markers: this.props.markers,
            routes: this.props.routes
        })
    }

    componentWillReceiveProps(nextProps) {
        this.spreadDataIntoState({
            markers: nextProps.markers,
            routes: nextProps.routes
        })
    }

    render() {
        let renderItemFunc = ({item, index}) => (
            <MarkerView owned={item.owned} isPublic={item.isPublic} marker={item} onExpand={this.onExpandPress}
                        expanded={this.state.expandedId === item.id}/>);

        let sectionHeader = (info) => (
            <View style={styles.header}><Text style={styles.headerText}>{info.section.title}</Text></View>);

        let keyExtractor = (item, index) => index;

        return <View><SectionList sections={this.state.sections} renderSectionHeader={sectionHeader}
                                  renderItem={renderItemFunc}
                                  keyExtractor={keyExtractor} extraData={this.state}/></View>
    }
}

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#1AF',
        height: 30,
        borderColor: '#000',
        borderWidth: 5
    },
    headerText: {
        fontWeight: 'bold',
        fontSize: 20
    }
})

function mapStateToProps(state) {
    return {
        markers: state.markers,
        routes: state.routes
    }
}

export default connect(mapStateToProps, null)(ListScreen)