import React, { Component } from 'react';
import axios from 'react-native-axios';
import { StyleSheet, FlatList, Text, View, Alert, Image, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Item } from 'native-base';

 export default class Category extends Component {
 constructor(props) {
   super(props);
   this.state = { 
      categories: [],
      WebNews: [
        {
          "category_name": "Local News",
          "urlSlug": "get_local_news",
          "image": require('../../img/local.png'),
        },
        {
          "category_name": "Kerala News",
          "urlSlug": "get_kerala_news",
          "image": require('../../img/kerala.png'),
        },
        {
          "category_name": "International News",
          "urlSlug": "get_international_news",
          "image": require('../../img/international.png'),
        },
        {
          "category_name": "Sunday Special",
          "urlSlug": "get_sunday_special_news",
          "image": require('../../img/sunday.png'),
        },
        {
          "category_name": "Youth Special",
          "urlSlug": "get_youth_special_news",
          "image": require('../../img/youth.png'),
        },
        {
          "category_name": "Business News",
          "urlSlug": "get_business_news",
          "image": require('../../img/business.png'),
        }
      
      ],
      tempCategory: {
        "category_id": "100",
        "category_name": "All",
        "category_image": "allcate.png"
      },
      imgUrl: 'https://kochideal.com//uploads/category/',
    };
 }


 componentWillMount() {
  axios.get('https://kochideal.com/api/webservice/get_category')
  .then(response => this.setState({ categories: response.data.response }));
  }


categoryItem(title, urlSlug) {
  Actions.category({ title: title, category_id: 33, WebSpecial: true, urlSlug: urlSlug });
  // Actions.push('category', { title: title, category_id: 33, WebSpecial: true, urlSlug: urlSlug });
}


 render() {
  this.state.categories.unshift(this.state.tempCategory);
  console.log('Test Array values');
  console.log(this.state.catt);
   return (

<View style={styles.MainContainer}>
    <Text style={{marginTop: 10, marginBottom: 10, marginLeft: 10, fontSize: 16, color: 'black'}}>
        Web Special
    </Text>
    <FlatList
         data={ this.state.WebNews }
         keyExtractor={(item,index)=>index.toString()}
         renderItem={({ item }) =>
         <TouchableOpacity style={styles.GridViewBlockStyle} onPress={this.categoryItem.bind(this, item.category_name, item.urlSlug)} activeOpacity={.9}>
         <View style={styles.GridViewBlockStyle}>
          <Image 
            style={styles.thumbnailStyle}
            source={item.image}
            // source={{ uri: 'https://img.icons8.com/ios/50/000000/home-page-filled.png'}} 
          />
            <Text 
            style={styles.GridViewInsideTextItemStyle} 
            onPress={this.categoryItem.bind(this, item.category_name, item.urlSlug)}
            >
                {item.category_name} 
            </Text>
        </View>
        </TouchableOpacity>}
         numColumns={3}
    />
</View>
           
   );
 }
}

const styles = StyleSheet.create({

MainContainer: {
justifyContent: 'center',
flex: 1,
margin: 3,
marginTop: 20,
borderRadius: 5,
height: 300,
backgroundColor: '#fff',

},

thumbnailStyle: {
  height: 30,
  width: 30,
},

GridViewBlockStyle: {

  justifyContent: 'center',
  flex: 1,
  alignItems: 'center',
  height: 100,
  backgroundColor: '#F2F2F2',
  borderRadius: 10,
  margin: 5,
},

GridViewInsideTextItemStyle: {

   padding: 10,
   fontSize: 11,
   justifyContent: 'center',
   color: 'black',
   
 },

});
