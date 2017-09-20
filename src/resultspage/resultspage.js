import React, { Component } from 'react';
import { Text, View } from 'react-native';
import styles from './styles.js';

class ResultsPage extends Component {

  static navigationOptions = {
    title: 'RESULTS',
  };

  render() {
    return (
      <View style={styles.menuContainer}>

         <Text>I AM results</Text>

       </View>
    )
  }
}

export default ResultsPage;
