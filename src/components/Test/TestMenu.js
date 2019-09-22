import React, { Component } from 'react';
import { Platform, StyleSheet, View, Text, TextInput, Modal, Button, TouchableOpacity, Alert } from 'react-native';
 
export default class TestMenu extends Component {
 
  constructor(props) {
    super(props);
    this.state = { 
        Alert_Visibility: false 
    };
  }

  ShowAlertWithDelay = () => {
    setTimeout(function() {
      //Put All Your Code Here, Which You Want To Execute After Some Delay Time.
      // Alert.alert('Alert Shows After 5 Seconds of Delay.');
      console.log('PopUp');
    }, 500); 
  }

 
  Show_Custom_Alert(visible) {
    this.setState({Alert_Visibility: visible});
  }
 
  ok_Button=()=>{
    Alert.alert("OK Button Clicked.");
  }
 
 render() {
   this.ShowAlertWithDelay();
   return (
      <View style={styles.MainContainer}>
        <Modal
      visible={this.state.Alert_Visibility}
      transparent={false}
      animationType={"fade"}
      onRequestClose={ () => { this.Show_Custom_Alert(!this.state.Alert_Visibility)}}>

        <View style={{ flex:1, alignItems: 'center', justifyContent: 'center' }}>
            <View style={styles.Alert_Main_View}>
                <Text style={styles.Alert_Title}>Who are you.?</Text>
                {/* <View style={{ width: '100%', height: 2, backgroundColor: '#fff'}} /> */}
                {/* <Text style={styles.Alert_Message}> Are You Sure(Alert Dialog Message). </Text> */}
                <TextInput placeholder='Enter your Email Id' style={styles.Alert_Message}/>
                <View style={{ width: '100%', height: 1, backgroundColor: '#fff'}} />
                <View style={{flexDirection: 'row', height: '20%'}}>

                    <TouchableOpacity 
                        style={styles.buttonStyle}
                        onPress={() => { this.Show_Custom_Alert(!this.state.Alert_Visibility)} }  
                        activeOpacity={0.7} 
                         >
                        <Text style={styles.TextStyle}> OK </Text>
                    </TouchableOpacity>

                    <View style={{ width: 1, height: ' 100%', backgroundColor: '#fff'}} />
                    <TouchableOpacity 
                        style={styles.buttonStyle} 
                        onPress={() => { this.Show_Custom_Alert(!this.state.Alert_Visibility)} } 
                        activeOpacity={0.7} 
                        >
                        <Text style={styles.TextStyle}> CANCEL </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    </Modal>
        <Button onPress={() => { this.Show_Custom_Alert(true)}} title="Click Here To Show Custom Alert Dialog" />
      </View>     
   );
 }
}
 
const styles = StyleSheet.create({
 
MainContainer: {
    
 flex:1,
 justifyContent: 'center',
 alignItems: 'center',
 marginTop: (Platform.OS == 'ios') ? 20 : 0
 
},
 
Alert_Main_View:{
 
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: "#b7b7b7", 
  height: 200 ,
  width: '90%',
  borderWidth: 1,
  borderColor: '#fff',
  borderRadius:7,
 
},
 
Alert_Title:{
 
  fontSize: 20, 
  color: "#fff",
  textAlign: 'center',
  padding: 10,
  height: '28%'
 
},
 
Alert_Message:{
 
    fontSize: 22, 
    color: "#fff",
    textAlign: 'center',
    padding: 10,
    height: '42%'
   
  },
 
buttonStyle: {
    
    width: '50%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center'
 
},
   
TextStyle:{
    color:'#fff',
    justifyContent: 'center',
    textAlign:'center',
    fontSize: 18,
}
 
});