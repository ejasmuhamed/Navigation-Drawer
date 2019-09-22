import React, { Component } from 'react';
import { StyleSheet, FlatList, Text, Image, View, Alert, ActivityIndicator, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class Pagination extends Component {

    constructor() {
        super();
        this.state = {
            data: [],
            page: 1,
            loadingStatus: false,
        }
    }

    componentDidMount() {
        console.log("WebSpecial check status");
        console.log(this.props.NewsProps.WebSpecial);
        const { WebSpecial } = this.props.NewsProps;
        if (WebSpecial) {
            this.getDataWebNews();
        }
        this.getData();
    }
    // this is for category wise news
    getData = async () => {
        const { page } = this.state;
        const { categoryId } = this.props;
        this.setState({ loadingStatus: true });
        const url = 'https://pravasivision.com/api/webservice/get_news_by_category/' + categoryId + '/' + page + '/10';
        fetch(url).then((response) => response.json())
        .then((responseJson) => {
            this.setState({
                data: this.state.data.concat(responseJson.response),
                loadingStatus: false,
            });
        })
    }
    //  this is for web news
    getDataWebNews = async () => {
        const { page } = this.state;
        const { urlSlug } = this.props.NewsProps;
        this.setState({ loadingStatus: true });
        const url = 'https://pravasivision.com/api/webservice/' + urlSlug + '/' + page + '/10';
        fetch(url).then((response) => response.json())
        .then((responseJson) => {
            this.setState({
                data: this.state.data.concat(responseJson.response),
                loadingStatus: false,
            });
        })
    }
    detailedNewsClick(news_id) {
        Actions.MainNews({ news_id: news_id });
        // Alert.alert('Alert');
    }

    renderRow = ({item}) => {
        return (
            <TouchableOpacity onPress={() => this.detailedNewsClick(item.news_id)} activeOpacity={.9}>
            <View style={stylesx.containerStyle}>
                <View style={stylesx.containerStyleSection}>
                <Image source={{uri: "https://pravasivision.com/uploads/news/" + item.featured_image }} style={styles.itemImage} />
                <Text style={styles.itemText}>{item.news_title}</Text>
                </View>
            </View>
            </TouchableOpacity>
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
        if (!this.state.loadingStatus) {
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
        } else {
            return (
                <View >
                <ActivityIndicator style={{ marginTop: 300, alignItems: 'center', justifyContent: 'center', }} size="large" />
                </View>
            );
        } 
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