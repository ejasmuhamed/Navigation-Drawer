import React, { Component } from 'react';
import { StyleSheet, FlatList, Text, Image, View, Alert } from 'react-native';

export default class Pagination extends Component {

    constructor() {
        super();
        this.state = {
            data: [],
            page: 1,
        }
    }

    componentDidMount() {
        this.getData();
        console.log(this.state.data);
    }

    getData = async () => {
        const { page } = this.state;
        const { categoryId } = this.props;
        const url = 'https://pravasivision.com/api/webservice/get_news_by_category/' + categoryId + '/' + page + '/10';
        fetch(url).then((response) => response.json())
        .then((responseJson) => {
            this.setState({
                data: this.state.data.concat(responseJson.response)
                // data: responseJson.response,
            });
        })
    }

    renderRow = ({item}) => {
        return (
            <View style={stylesx.containerStyle}>
                <View style={stylesx.containerStyleSection}>
                <Image source={{uri: "https://pravasivision.com/uploads/news/" + item.featured_image }} style={styles.itemImage} />
                <Text style={styles.itemText}>{item.news_title}</Text>
                </View>
            </View>
        );
    }

    handleLoadMore = () => {
        if (this.state.data.length === 10) {
            this.setState(
                { page: this.state.page + 1 },
                this.getData
            );
        }
    }

    render() {
        return (
            <FlatList 
                style={styles.container}
                data={this.state.data}
                renderItem={this.renderRow}
                keyExtractor={(item,index)=>index.toString()}
                onEndReached={this.handleLoadMore}
                onEndReachedThreshold={0.5}
            />
        );
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        backgroundColor: '#fff',
    },
    itemImage: {
        width: 70, 
        height: 70, 
        borderRadius: 10,
        marginRight: 10,
    },
    itemText: {
        marginTop: 10,
        fontSize: 14,
        width: 280,
        height: 70,
    }
});

const stylesx = {
    containerStyle: {
        borderWidth: 1,
        borderRadius: 10,
        borderColor: '#ddd',
        borderBottomWidth: 0,
        marginLeft: 12,
        marginRight: 12,
        marginTop: 2,
        marginBottom: 2,
    },
    containerStyleSection: {
        borderBottomWidth: 1,
        borderRadius: 10,
        padding: 5,
        backgroundColor: '#fff',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        borderColor: '#ddd',
    }
};