import React, { Component } from 'react';
import { View, Text } from 'react-native';
import TestMenu from './TestMenu';

export default class Test extends Component {

    ShowAlertWithDelay = () => {
        setTimeout(() => {
          //Put All Your Code Here, Which You Want To Execute After Some Delay Time.
          // Alert.alert('Alert Shows After 5 Seconds of Delay.');
          console.log('PopUp');
          
        }, 500); 
      }

      render() {
          return (
            <TestMenu />
          );
      }
}