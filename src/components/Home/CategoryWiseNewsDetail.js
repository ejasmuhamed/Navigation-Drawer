import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, Alert } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Card } from './common/Card';
import { CardSection } from './common/CardSection';

export default class CategoryWiseNewsDetail extends Component {

    constructor(){
        super();
        state = {
            date: null,
            month: null,
        }
    }
    
    componentWillMount() {
        this.getMonthDays(this.props.news.publish_date);
    }
    newsClickAction(itemsz) {
        Actions.MainNews({ news_id: itemsz })
    }
    DateConversion(date) {
    const monthNames = [ "January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December" ];
    
    const d = new Date(date);
        const dates = d.getDate();
        const month = monthNames[d.getMonth()];
        this.setState({date: dates, day: month })
    }
    getMonthDays(MonthYear) {
        var months = [
          'January',
          'February',
          'March',
          'April',
          'May',
          'June',
          'July',
          'August',
          'September',
          'October',
          'November',
          'December'
        ];
      
        var Value=MonthYear.split(" ");
        var Value2 =Value[0].split("-");    
        const monthVar = Number.parseInt(Value2[1]);
        var date = Value2[2];
        var month = months[monthVar - 1];
        console.log("date details") 
        console.log(date);   
        // return new Date(Value[1], month, 0).getDate();
        this.setState({ date: date, month: month});
        
      }
    render() {
        console.log(this.state.date + this.state.month);
    return (
        <TouchableOpacity onPress={() => this.newsClickAction(this.props.news.news_id)} activeOpacity={.9}>
        <View>
        <Card>
            <CardSection>
                <Image source={{ uri: "https://pravasivision.com/uploads/news/" + this.props.news.featured_image }} style={{ width: 290, height: 200, borderRadius: 15}} />
                <Text style={{marginTop: 20, color: 'black', fontWeight: '500', fontSize: 18, marginLeft: 8, marginRight: 8, }} numberOfLines={2} ellipsizeMode='tail'>
                {this.props.news.news_title}
                </Text>
                <Text style={{marginTop: 10, color: '#000', fontSize: 13, textAlign: 'right', marginRight: 15, }}>
                {this.state.date} {this.state.month}
                </Text>
            </CardSection>
        </Card>
        </View>
        </TouchableOpacity>
    );
    }
};

