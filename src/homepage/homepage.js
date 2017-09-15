import React, { Component } from 'react';
import { Text, View } from 'react-native';

import Menu from './menu';
import BackgroundImage from './BackgroundImage';
import styles from './styles.js';

class HomePage extends Component {

  static navigationOptions = {
    title: 'OPEN MIC',
  };

  render() {

    const { navigate } = this.props.navigation;

    return (

      <BackgroundImage>

        <View style={styles.appContainer}>

            <Menu navigate={navigate} />

        </View>

      </BackgroundImage>

    );
  }
}

export default HomePage;
