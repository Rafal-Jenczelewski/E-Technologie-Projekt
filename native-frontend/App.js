import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {TabNavigator} from 'react-navigation';
import MapScreen from './screens/MapScreen/MapScreen'
import ProfileScreen from './screens/ProfileScreen/ProfileScreen'

// export default class App extends React.Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <Text>Open up App.js to start working on your app!</Text>
//         <Text>Changes you make will automatically reload.</Text>
//         <Text>Shake your phone to open dev mode.</Text>
//       </View>
//     );
//   }
// }

export default TabNavigator({
        Map: MapScreen,
        Profile: ProfileScreen
    },
    {
        tabBarOptions: {
            style: {
                paddingTop: 10
            }
        },
        tabBarPosition: 'top',
        cardStyle: {
            padding: 200
        }
    });

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
