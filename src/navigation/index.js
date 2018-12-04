import {createAppContainer, createStackNavigator} from "react-navigation";
import HomeScreen from '../screen/App';
import LoginScreen from '../screen/LoginScreen'

const AppNavigator = createStackNavigator({
    Home: {
        screen: HomeScreen,
        navigationOptions: {
            header: null,
        }
    },
    Details: {
        screen: LoginScreen,
    },
}, {
    initialRouteName: 'Home',
});

export default createAppContainer(AppNavigator);