import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class LiveTv extends Component {
    constructor(props) {
        super(props);
        
    }

    render() {
        return (
            <View style={{ justifyContent: 'center', alignContent: 'center' }}>
                <Text>Live Tv is not available</Text>
            </View>
        );
    }
};