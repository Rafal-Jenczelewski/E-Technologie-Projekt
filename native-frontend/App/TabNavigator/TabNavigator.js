import {TabNavigator} from 'react-navigation';
import MapScreen from '../../screens/MapScreen/MapScreen'
import ProfileScreen from '../../screens/ProfileScreen/ProfileScreen'

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
            padding: 2000
        }
    });