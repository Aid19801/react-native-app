import React, { Component } from 'react';
import { Text, View } from 'react-native';
import BackgroundImage from '../components/backgroundimage/backgroundImage';

import styles from './styles.js';

class InfoPane extends Component {

  static navigationOptions = ({ navigation }) => ({
    title: 'INFO PANE',
  });


  componentWillMount() {
      
  }
  render() {

    return (
      <BackgroundImage>
        <View style={styles.appContainer}>

          <Text style={styles.title}>I AM A TITLE</Text>

          <View style={styles.infoPaneContainer}>
            <Text style={styles.text}>I am text</Text>
            <Text style={styles.text}>I am text</Text>
            <Text style={styles.text}>I am text</Text>
            <Text style={styles.text}>I am text</Text>
          </View>

        </View>
      </BackgroundImage>
    )
  }
}

export default InfoPane;
