import React, { Component } from 'react';
import { View } from 'react-native';
import CategoryPagination from '../components/NewsList/CategoryPagination';

export default class Abc extends Component {
    render() {
        console.log('abc');
        console.log(this.props);
        return (
            <View style={{ flex: 1, backgroundColor: '#fff', }}>
                <CategoryPagination style={{ flex: 1 }} categoryId={this.props.cat_id} />
            </View>
        );
    }
}
