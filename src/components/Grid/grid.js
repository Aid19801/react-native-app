import React, { Component } from 'react';
import { Text, View } from 'react-native';

import styles from './styles.js';


class Grid extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <View style={styles.gridContainer}>
        <View style={styles.textContainer}>
          <Text style={styles.text}>
            I am Grid View
          </Text>
        </View>
      </View>
    )
  }
}

export default Grid;
