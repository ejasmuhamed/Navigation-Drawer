import React, { Component } from 'react';
import { View, ScrollView, Text, ActivityIndicator, TouchableOpacity } from 'react-native';
import axios from 'react-native-axios';
import CategoryWiseNewsDetail from './CategoryWiseNewsDetail';
import Category from './Category';

class CategoryWiseNews extends Component {
    state = { 
        flash: [], 
        loadingStatus: false,
    };

      componentWillMount() {
        this.setState({ loadingStatus: true });
        axios.get('https://pravasivision.com/api/webservice/get_flash_news/1/5')
        .then(response => this.setState({ flash: response.data.response, loadingStatus: false }));
    }

    renderFlashNews() {
        return (
            this.state.flash.map(flash => 
            <CategoryWiseNewsDetail key={flash.news_id} news={flash} />
        )
        );
    }
    render() {
        if (!this.state.loadingStatus) {
            return (
                <View>
                    <Text style={{marginTop: 15, marginBottom: 10, marginLeft: 10, color: 'black', fontSize: 16}}>Flash News</Text>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false}>{ this.renderFlashNews() }</ScrollView>
                    <Category />
                </View>
            );
        } else {
            return (
                <View >
                <ActivityIndicator style={{ marginTop: 300, alignItems: 'center', justifyContent: 'center', }} size="large" />
                </View>
            );
        }
        
    }
}
 export { CategoryWiseNews };
