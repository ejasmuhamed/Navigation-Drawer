import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class Login extends Component {
    constructor(props) {
        super(props);
        
    }

    render() {
        return (
            <View style={{ justifyContent: 'center', alignContent: 'center' }}>
                <Text>Login </Text>
            </View>
        );
    }
};