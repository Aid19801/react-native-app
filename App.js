import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import HomePage from './src/homepage/homepage';
import BackgroundImage from './BackgroundImage';
import styles from './styles.js';


class App extends Component {
  render() {
    return (
      <BackgroundImage>

        <View style={styles.appContainer}>

            <View style={styles.titleContainer}>
              <Text style={styles.title}>OPEN MIC</Text>
            </View>

            <HomePage />

        </View>

      </BackgroundImage>
    );
  }
}

export default App;
