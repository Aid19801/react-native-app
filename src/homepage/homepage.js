import React, { Component } from 'react';
import { Text, View } from 'react-native';

import Menu from './menu';
import BackgroundImage from '../components/backgroundimage/backgroundImage';

import styles from './styles.js';

class HomePage extends Component {

  static navigationOptions = {
    title: 'Open_Mic',
  };

  render() {

    const { navigate } = this.props.navigation;

    return (

      <BackgroundImage>

        <View style={styles.appContainer}>
          <Text style={styles.title}>HOME</Text>

            <Menu navigate={navigate} />

        </View>

      </BackgroundImage>

    );
  }
}

export default HomePage;
