import React from 'react';
import { View, Text, Button } from 'react-native';
import { createAppContainer, createStackNavigator, StackActions, NavigationActions } from 'react-navigation'; // Version can be specified in package.json

class HomeScreen extends React.Component {

    // static navigationOptions = {
    //     title: 'Home',
    //     headerStyle: {
    //         backgroundColor: '#f4511e',
    //     },
    //     headerTintColor: '#fff',
    //     headerTitleStyle: {
    //         fontWeight: 'bold',
    //     },
    // };

    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Home Screen</Text>
                <Button
                    title="Go to Details"
                    onPress={
                        // () => {
                        //     this.props.navigation.dispatch(StackActions.reset({
                        //         index: 0,
                        //         actions: [
                        //             NavigationActions.navigate({ routeName: 'Details' })
                        //     ],
                        //     }))
                        // }
                        () => this.props.navigation.navigate('Details',{
                            username: 'Heng Brandon'
                        })
                    }
                />
            </View>
        );
    }
}

// class DetailsScreen extends React.Component {
//     render() {
//         return (
//             <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//                 <Text>Details Screen</Text>
//                 <Text>Hello world</Text>
//                 <Button
//                     title="Go to Details... again"
//                     onPress={() => this.props.navigation.push('Details')}
//                 />
//                 <Button
//                     title="Go back"
//                     onPress={() => this.props.navigation.goBack()}
//                 />
//                 <Button
//                     title="Go Home"
//                     onPress={() => this.props.navigation.popToTop()}
//                 />
//             </View>
//         );
//     }
// }

export default HomeScreen