import React, { Component } from 'react';
import { Text, View } from 'react-native';
import styles from './styles.js';

class GigsPage extends Component {

  static navigationOptions = {
    title: 'GIGS',
  };

  render() {
    return (
      <View style={styles.menuContainer}>

         <Text>I AM GIGS</Text>

       </View>
    )
  }
}

export default GigsPage;
