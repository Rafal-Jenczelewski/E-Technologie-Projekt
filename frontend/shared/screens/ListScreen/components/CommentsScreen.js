import React, {Component} from 'react'
import {Button, FlatList, StyleSheet, Text, TextInput, View} from 'react-native'
import {getComments, fetchAddComment} from '../utils/requsts'

class CommentsScreen extends Component {
    static navigationOptions = {
        header: null
    };

    state = {
        comments: [],
        comment: ""
    };

    constructor(props) {
        super(props);

        this.fetchComments = this.fetchComments.bind(this);
        this.inputChange = this.inputChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    inputChange(e) {
        this.setState({comment: e});
    }

    async fetchComments() {
        let coms = await getComments(this.props.marker.id);
        this.setState({
            comments: coms.map(e => Object.assign({}, {key: e.id}, e))
        })
    }

    componentDidMount() {
        this.fetchComments();
    }

    onSubmit() {
        fetchAddComment({
            targetId: this.props.marker.id,
            content: this.state.comment
        });
        this.setState({comment: ""});
        this.fetchComments();
    }

    render() {
        let coords = this.props.marker.coordinate ? [this.props.marker.coordinate] : this.props.marker.coordinates;
        coords = coords.map(e => <Text key={e.latitude + e.longitude}>Lat: {e.latitude} Long: {e.longitude}</Text>);

        return <View style={styles.container}>
            <Button onPress={() => this.props.navigation.navigate('List')} title={'Back'}/>
            <View style={styles.main}>
                <Text style={styles.header}>{this.props.marker.name}</Text>
                <View style={{borderBottomColor: 'lightblue', borderBottomWidth: 2}}/>
                <Text style={styles.biggerText}>{this.props.marker.description}</Text>
                <View>{coords}</View>
            </View>
            <View style={styles.commentInput}>
                <TextInput placeholder={"Tell others what you think..."} onChangeText={this.inputChange} value={this.state.comment}/>
                <Button onPress={this.onSubmit} title={'Comment'}/>
            </View>
            <FlatList style={styles.list}
                      data={this.state.comments}
                      keyExtractor={(item) => item.id}
                      renderItem={({item}) => <View key={item.id} style={styles.comment}>
                          <Text style={styles.header}>{item.authorName}</Text>
                          <View style={{borderBottomColor: 'lightblue', borderBottomWidth: 2}}/>
                          <Text style={styles.biggerText}>{item.content}</Text>
                      </View>}/>
        </View>
    }
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        marginTop: 10
    },
    list: {
        width: '100%',
        marginTop: 30
    },
    commentInput: {
        width: '95%',
        marginRight: 'auto',
        marginLeft: 'auto',
    },
    biggerText: {
        fontSize: 15
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
        borderColor: 'blue',
        borderWidth: 2,
        borderRadius: 5,
        padding: 10,
    },
    header: {
        fontWeight: 'bold',
        fontSize: 20
    },
    comment: {
        padding: 10,
        width: "90%",
        marginLeft: 'auto',
        marginRight: 2,
        borderColor: 'blue',
        borderWidth: 2,
        borderRadius: 5,
        marginBottom: 5
    },
})

export default CommentsScreen;