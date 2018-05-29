import {TabNavigator} from 'react-navigation';
import MapScreen from '../../screens/MapScreen/MapScreen'
import ProfileScreen from '../../screens/ProfileScreen/ProfileScreen'
import StackNav from '../../screens/ListScreen/StackNavigator'

export default TabNavigator({
        Map: MapScreen,
        List: StackNav,
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