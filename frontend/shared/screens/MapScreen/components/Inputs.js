import React, {Component} from 'react'
import {TextInput, View, Text, StyleSheet, Button} from 'react-native'

class Inputs extends Component {
    render() {
        return <View style={styles.container}>
            <View style={styles.input}><Text>Name:</Text>
                <TextInput style={styles.text} placeholder={"Name this place..."} value={this.props.name} onChangeText={this.props.onNameChange}/></View>
            <View style={styles.input}><Text>Description:</Text>
                <TextInput style={styles.text} placeholder={"Describe this place..."} value={this.props.description} onChangeText={this.props.onDescChange}/></View>
            <Button title={"Save"} onPress={this.props.onPress} disabled={this.props.buttonDisabled}/>
        </View>
    }
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        padding: 10,
        width: '100%'
    },
    input: {
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        width: '100%'
    },
    text: {
        width: '100%'
    }
});

export default Inputs