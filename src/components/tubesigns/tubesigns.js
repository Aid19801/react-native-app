import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';

import styles from './styles.js';

class TubeSignsContainer extends Component {


  checkTubeSigns(firstImage, secondImage) {
    if (secondImage) {
      return <View><Image style={styles.tubeImg} source={{ uri: `${firstImage}` }} /> <Image style={styles.tubeImg} source={{ uri: `${secondImage}` }} /></View>
    } else {
      return <Image style={styles.tubeImg} source={{ uri: `${firstImage}` }} />
    }
  }

  render() {
    const { tubeImg1, tubeImg2 } = this.props;

    return (
      <View style={styles.tubeSignsContainer}>
        {this.checkTubeSigns(tubeImg1, tubeImg2)}
      </View>
    )
  }
}

export default TubeSignsContainer;
