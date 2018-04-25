import React, {Component} from 'react'
import {TextInput, View, Text, StyleSheet, Button} from 'react-native'

class Inputs extends Component {
    render() {
        return <View style={styles.container}>
            <View style={styles.input}><Text>Nazwa:</Text>
                <TextInput value={this.props.name} onChangeText={this.props.onNameChange}/></View>
            <View style={styles.input}><Text>Opis:</Text>
                <TextInput value={this.props.description} onChangetext={this.props.onDescChange}/></View>
            <Button title={"Zapisz"} onPress={this.props.onPress} disabled={this.props.buttonDisabled}/>
        </View>
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'flex-start'
    },
    input: {
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start'
    }
});

export default Inputs