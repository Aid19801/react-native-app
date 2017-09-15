import React, { Component } from 'react';
import { Text, View } from 'react-native';
import styles from './styles.js';

class NewsPage extends Component {

  static navigationOptions = {
    title: 'NEWS',
  };

  render() {
    return (
      <View style={styles.menuContainer}>

         <Text>I AM NEWS</Text>

       </View>
    )
  }
}

export default NewsPage;
