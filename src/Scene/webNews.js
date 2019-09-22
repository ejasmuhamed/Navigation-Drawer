import React, { Component } from 'react';
import { View } from 'react-native';
import Pagination from '../components/NewsList/Pagination';

export default class webNews extends Component {
    render() {
        console.log('WbNews porperties');
        console.log(this.props);
        return (
            <View style={{ flex: 1, backgroundColor: '#fff', }}>
                <Pagination style={{ flex: 1 }} categoryId={this.props.category_id} NewsProps={this.props} />
            </View>
        );
    }
}
