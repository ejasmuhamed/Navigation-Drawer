import React, { Component } from 'react';
import { View, ScrollView, Text, ActivityIndicator } from 'react-native';
import axios from 'react-native-axios';
import CategoryWiseNewsDetail from './CategoryWiseNewsDetail';

export default class SingleNews extends Component {
    constructor() {
        super();

    }
    state = { 
        news: [], 
        loadingStatus: false,
    };

      componentWillMount() {
          this.setState({loadingStatus: true});
          const { news_id } = this.props;
        axios.get('https://pravasivision.com/api/webservice/get_news_data/' + news_id)
        .then(response => this.setState({ news: response.data.response, loadingStatus: false }));

    }

    renderNews() {
        const { news } = this.state;
        return (
            <CategoryWiseNewsDetail key={news.news_id} news={news}/>
        );
    }

    render() {
        if (!this.state.loadingStatus) {
            return (
                <ScrollView style={{flex: 1,}} showsHorizontalScrollIndicator={false}>
                { this.renderNews() }
                </ScrollView>
            );
        } else {
            return (
                <View >
                <ActivityIndicator style={{ marginTop: 300, alignItems: 'center', justifyContent: 'center', }} size="large" />
                </View>
            );
        } 
    }
};
