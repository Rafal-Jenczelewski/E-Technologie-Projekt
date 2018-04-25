import {TabNavigator} from 'react-navigation';
import MapScreen from '../../../screens/MapScreen/MapScreen'
import ProfileScreen from '../../../screens/ProfileScreen/ProfileScreen'
import ListScreen from '../../../screens/ListScreen/ListScreen'

export default TabNavigator({
        Mapa: MapScreen,
        Lista: ListScreen,
        Ustawienia: ProfileScreen
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