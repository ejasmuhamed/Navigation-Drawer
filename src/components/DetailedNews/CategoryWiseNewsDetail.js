import React, { Component } from 'react';
import { View, Text, Image, ScollView } from 'react-native';
import { Card } from './common/Card';
import { CardSection } from './common/CardSection';

export default class CategoryWiseNewsDetail extends Component {
    constructor(){
        super();
        this.state = {
            detailedNews: '',
            date: null,
            month: '',
        }
    }

    componentWillMount() {
        this.mainFunctions();
    }

    mainFunctions() {
        const { publish_date, description } = this.props.news;

        this.getMonthDays(publish_date);

        const abc = description.replace(/(<([^>]+)>)/ig, '');
        const abc1 = abc.replace(/(&nbsp;)/ig, '');
        const abc2 = abc1.replace(/(&zwnj;)/ig, '');
        const detailedNews = abc2.replace(/(&zwj;)/ig, '');

        this.setState({ detailedNews: detailedNews });
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
        const { news } = this.props;
        const { date, month, detailedNews } = this.state;
        return (
            <Card>
                <CardSection>
                    <Image source={{ uri: "https://pravasivision.com/uploads/news/" + news.featured_image }} style={{ justifyContent: 'center', width: 400, height: 300, borderRadius: 15}} />
                </CardSection>
                <View style={styles.containerStyle}>
                    <Text style={{marginTop: 20, fontSize: 20, fontWeight: '500', color: 'black', }}>
                    {news.news_title}
                    </Text>
                    <Text style={{marginTop: 5, marginRight: 5, fontSize: 14, textAlign: 'right', fontWeight: '500', color: 'black', }}>
                    - {news.author}
                    </Text>
                    <Text style={{marginTop: -15, marginBottom: 20, marginLeft: 5, fontSize: 12, textAlign: 'left', fontWeight: '500', color: 'black', }}>
                    {date} {month}
                    </Text>
                </View>
                <View style={{flex: 1,}}>
                <Text style={{fontSize: 20, marginLeft: 20, lineHeight: 35, marginRight: 20, marginTop: 20, marginBottom: 10, color: 'black'}}>
                    {detailedNews}
                </Text> 
                </View>
                    
                
            </Card>
        );
    }
    
};

const styles = {
    containerStyle: {
        padding: 4,
        backgroundColor: '#F2F2F2',
        flexDirection: 'column',
        position: 'relative',
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
    },
    ContentStyle: {
        padding: 5,
        backgroundColor: '#fff',
        flexDirection: 'column',
        position: 'relative',
        flex: 1,
    }
};
