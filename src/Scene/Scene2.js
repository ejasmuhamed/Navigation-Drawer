import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class Scene2 extends Component {
    constructor(props) {
        super(props);
        const passValue = this.props.children;
        console.log(this.props);
    }

    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignContent: 'center' }}>
                <Text>Screne 2 sah </Text>
            </View>
        );
    }
}