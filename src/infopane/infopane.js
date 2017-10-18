import React, { Component } from 'react';
import { Text, View } from 'react-native';
import BackgroundImage from '../components/backgroundimage/backgroundImage';

import styles from './styles.js';

class InfoPane extends Component {

  static navigationOptions = ({ navigation }) => ({
    title: 'GIG INFO',
  });

  render() {

    const { gig, postcode, venue, image, bringer } = this.props.navigation.state.params.clickedItem;

    return (
      <BackgroundImage>
        <View style={styles.appContainer}>

          <Text style={styles.title}>{gig}</Text>

          <View style={styles.infoPaneContainer}>
            <Text style={styles.text}>{postcode}</Text>
            <Text style={styles.text}>{venue}</Text>
            <Text style={styles.text}>Bringer: {bringer}</Text>
            <Text style={styles.text}>image here</Text>

          </View>

        </View>
      </BackgroundImage>
    )
  }
}

export default InfoPane;
