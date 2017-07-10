import React, { Component } from 'react';
import { requireNativeComponent, PropTypes } from 'react-native';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,Button,
  Image,TextInput,DrawerLayoutAndroid,ViewPagerAndroid,
  TouchableHighlight,Alert,
} from 'react-native';
import GridView from 'react-native-super-grid';
    
export class ProductList extends Component {

  _clickRow(data) {
      this.props.navigator.push({
      screen: 'example.SecondTabScreen',
      title: 'Product Details',
      data: data,
      });
   }

   renderScene(route, navigator) {
     Alert.alert( 'Alert Title', 'My Alert Msg', [ {text: 'Ask me later', onPress: () => console.log('Ask me later pressed')}, {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'}, {text: 'OK', onPress: () => console.log('OK Pressed')}, ], { cancelable: false } )
    return <Home navigator={navigator} data={route.data} />;
    }

  render() {
    const items = [
      { name: 'TURQUOISE', code: '#1abc9c' }, { name: 'EMERALD', code: '#2ecc71' },
      { name: 'PETER RIVER', code: '#3498db' }, { name: 'AMETHYST', code: '#9b59b6' },
      { name: 'WET ASPHALT', code: '#34495e' }, { name: 'GREEN SEA', code: '#16a085' },
      { name: 'NEPHRITIS', code: '#27ae60' }, { name: 'BELIZE HOLE', code: '#2980b9' },
      { name: 'WISTERIA', code: '#8e44ad' }, { name: 'MIDNIGHT BLUE', code: '#2c3e50' },
      { name: 'SUN FLOWER', code: '#f1c40f' }, { name: 'CARROT', code: '#e67e22' },
      { name: 'ALIZARIN', code: '#e74c3c' }, { name: 'CLOUDS', code: '#ecf0f1' },
      { name: 'CONCRETE', code: '#95a5a6' }, { name: 'ORANGE', code: '#f39c12' },
      { name: 'PUMPKIN', code: '#d35400' }, { name: 'POMEGRANATE', code: '#c0392b' },
      { name: 'SILVER', code: '#bdc3c7' }, { name: 'ASBESTOS', code: '#7f8c8d' },
    ];
    
    return (
      <View style={styles.container}>
      <GridView
        itemWidth={150}
        items={items}
        renderItem={item => (
          <TouchableHighlight onPress= {()=> this._clickRow(item)}>
            <View style={[styles.itemContainer]}>
              <View>
                <Image 
                style= {styles.backgroundImage}
                source={require('../Images/user.png')} 
                />
              </View>
                <View style = {styles.valueContainer}>
                  <Text  style={styles.itemName}>{item.name}</Text>
                  <Text style={styles.itemCode}>{item.code}</Text>
                </View> 
            </View>
            </TouchableHighlight>
          )}
      />
      </View>
    );
  }
}

const styles = StyleSheet.create({
      valueContainer: {
          justifyContent: 'center',
          alignItems: 'center',
          margin: 10
        },
        container : {
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#3498db',
          
        },
        itemName: {
          fontSize: 16,
          color: 'black',
          fontWeight: '600',
        },
        itemCode: {
          fontWeight: '600',
          fontSize: 12,
          color: 'black',
        },
        gridView: {
          paddingTop: 25,
          flex: 1,
        },
      backgroundImage: {
        width: 150
      },
        itemContainer: {
          borderRadius: 5,
          justifyContent: 'center',
          alignItems: 'center',
        },
});

export default ProductList;