import React, { Component } from 'react';
import { View, ScrollView, Alert } from 'react-native'; 
import { CategoryWiseNews } from '../components/Home/CategoryWiseNews';

export default class Home extends Component {


    ShowAlertWithDelay = () => {
        setTimeout(() => {
          //Put All Your Code Here, Which You Want To Execute After Some Delay Time.
          Alert.alert('Alert Shows After 5 Seconds of Delay.');
        }, 20000); 
      }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <ScrollView style={{ backgroundColor: '#fff' }} showsVerticalScrollIndicator={false}>
                    <CategoryWiseNews />
                </ScrollView>
            </View>
        );
    }
}
