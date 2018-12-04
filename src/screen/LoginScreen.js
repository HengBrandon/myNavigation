import React from 'react'
import {View,Text} from 'react-native'
import LogInForm from '../component/LoginForm'

class LoginScreen extends React.Component {

    render() {
        const username = this.props.navigation.getParam('username', 'NO-NAME')
        console.log(this.username)
        return (
            <Text>{username}</Text>
        );
    }
}

export default LoginScreen