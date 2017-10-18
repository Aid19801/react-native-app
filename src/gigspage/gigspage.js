import React, { Component } from 'react';
import { Text, View, Alert } from 'react-native';

import BackgroundImage from '../components/backgroundimage/backgroundImage';
import Grid from '../components/grid/grid';
import styles from './styles.js';
import { shuffleDays, getDayTitle } from '../lib/reuseableFunctions';

class GigsPage extends Component {

  static navigationOptions = {
    title: 'GIGS',
  };

  render() {

    const { navigation } = this.props;

    return (
      <BackgroundImage>

        <View style={styles.appContainer}>

           <Text style={styles.title}>{getDayTitle()}</Text>

           <Grid
            gridItems={shuffleDays()}
            navigate={navigation}
            />

         </View>

      </BackgroundImage>
    )
  }
}

export default GigsPage;
