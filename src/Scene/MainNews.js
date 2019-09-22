import React, { Component } from 'react';
import { View, Text } from 'react-native';
import SingleNews from '../components/DetailedNews/SingleNews';

export default class MainNews extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.log(this.props);
        return (
            <View style={{backgroundColor: '#fff', flex: 1}}>
            <SingleNews news_id={this.props.news_id} />
            </View>
        );
    }
};