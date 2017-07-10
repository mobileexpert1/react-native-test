import React, { Component } from 'react';
import {
  AppRegistry,
  View,
  StyleSheet,
  Image,Text,
  ScrollView 
} from 'react-native';

export  class ProductDetailList extends Component {
  renderScene(route, navigator) {
     Alert.alert( 'Alert Title', 'My Alert Msg', [ {text: 'Ask me later', onPress: () => console.log('Ask me later pressed')}, {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'}, {text: 'OK', onPress: () => console.log('OK Pressed')}, ], { cancelable: false } )
    return <Home navigator={navigator} data={route.data} />;
    }
  render() {
    return (
      <ScrollView contentContainerStyle= {styles.contentContainerStyle}> 
        <View  style= {{backgroundColor:'#2ecc71'}}>
          <View style= {styles.container}>
            <Image
            resizeMode="cover"
            style= {styles.imageStyles}
            source={require('../Images/Large.png')}  
            /> 
          </View> 
            <View  style= {styles.textContainer}>
              <Text style = {styles.textStyle}>Item Details</Text>
              <Text style = {styles.textStyle}>Item Price</Text>
            </View> 
        </View> 
       </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
   container: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'stretch',
    backgroundColor: '#3498db',
    margin: 10
    }, 
    textContainer: {
    flex: 1,
    margin :10
    },
  textStyle: {
    height: 40,
    borderBottomColor: '#95a5a6',
    borderWidth: 1,
    fontSize: 20,
    color: 'black',
    fontWeight: '600',
    textAlign: 'center',
    textAlignVertical: 'center',
    backgroundColor: '#3498db',
    marginTop:10
    },
  contentContainer: {
      paddingVertical: 20,
      backgroundColor: '#3498db',
    },
  imageStyles: {
    height: 400,
    },
});
export default ProductDetailList;