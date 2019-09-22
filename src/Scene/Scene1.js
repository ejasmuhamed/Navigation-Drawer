import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class Scene1 extends Component {
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignContent: 'center' }}>
                <Text>Screne 1</Text>
            </View>
        );
    }
}