import React, { Component } from 'react';
import { Text, View } from 'react-native';
import styles from './styles.js';

class ActsPage extends Component {

  static navigationOptions = {
    title: 'ACTS',
  };

  render() {
    return (
      <View style={styles.menuContainer}>

         <Text>I AM ACTS</Text>

       </View>
    )
  }
}

export default ActsPage;
