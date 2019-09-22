import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Alert } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Content, List, ListItem } from 'native-base';

export default class Menu extends Component {
    onClickedByAction(value, categoryId) {
        console.log('category in Menu : ' + categoryId);
        Actions.MainMenu();
        Actions.push('web', { title: value, category_id: categoryId });
    }
    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={{ flex: 1, backgroundColor: '#acacac', justifyContent: 'center', alignItems: 'center' }}>
                    <Image
                        source={{ uri: 'https://pravasivision.com/images/logo.jpg' }}
                        style={{ height: 100, width: 100, borderRadius: 20, }}
                    />
                </View>
                <View style={{ flex: 4, backgroundColor: '#acacac' }}>
                    <Content>
                        <List style={{ justifyContent: 'center', marginRight: 20, }}>
                            
                                <ListItem style={styles.categoryListStyle} onPress={() => Actions.Home()} >
                                <Image 
                                    style={styles.thumbnailStyle}
                                    source={require('../img/home.png')} 
                                />
                                    <Text style={styles.mainMenuText}>Home</Text>
                                </ListItem>
                            
                                <ListItem style={styles.categoryListStyle} onPress={() => Actions.LiveTv()}>
                                <Image 
                                    style={styles.thumbnailStyle}
                                    source={require('../img/liveTv.png')} 
                                />
                                    <Text style={styles.mainMenuText} >Live T V</Text>
                                </ListItem>
                        
                        </List>
                        <Text style={{fontSize: 12,marginBottom: 10, marginTop: 10, marginLeft: 20 }}>Categories</Text>
                        <List style={{backgroundColor: '#acacac', justifyContent: 'center', marginRight: 20, }}>
                            <ListItem onPress={() => this.onClickedByAction('Soudi Arabia', 33)}>
                                <Text style={styles.categoryText}>Soudi Arabia</Text>
                            </ListItem>

                            <ListItem onPress={() => this.onClickedByAction('UAE', 47)}>
                                <Text style={styles.categoryText}>UAE</Text>
                            </ListItem>

                            <ListItem onPress={() => this.onClickedByAction('Behrain', 44)}>
                                <Text style={styles.categoryText}>Behrain</Text>
                            </ListItem>

                            <ListItem onPress={() => this.onClickedByAction('Kuwait', 45)}>
                                <Text style={styles.categoryText}>Kuwait</Text>
                            </ListItem>

                            <ListItem onPress={() => this.onClickedByAction('Qatar', 46)}>
                                <Text style={styles.categoryText}>Qatar</Text>
                            </ListItem>

                            <ListItem onPress={() => this.onClickedByAction('USA', 36)}>
                                <Text style={styles.categoryText}>USA</Text>
                            </ListItem>

                            <ListItem onPress={() => this.onClickedByAction('Europe', 35)}> 
                                <Text style={styles.categoryText}>Europe</Text>
                            </ListItem>
                        </List>

                        <List style={{ marginTop: 10, justifyContent: 'center', marginRight: 20, }}>

                            <ListItem style={styles.categoryListStyle}>
                            <Image 
                                    style={styles.thumbnailStyle}
                                    source={require('../img/about.png')} 
                                />
                                <Text style={styles.mainMenuText}>About US</Text>
                            </ListItem>
                        </List>
                    </Content>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    categoryText: {
        color: '#000',
        fontSize: 12,
        marginLeft: 20,
    },
    thumbnailStyle: {
        height: 25,
        width: 25,
        marginLeft: 10,
      },
    mainMenuText: {
        color: '#000',
        fontSize: 14,
        fontWeight: '400',
        marginLeft: 20,
    },
    categoryListStyle: {
        backgroundColor: '#b7b7b7', 
        borderRadius: 10,
        marginTop: 5,
        marginBottom: 5,
    }
});