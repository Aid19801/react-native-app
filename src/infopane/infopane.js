import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';
import BackgroundImage from '../components/backgroundimage/backgroundImage';
import TubeSignsContainer from '../components/tubesigns/tubesigns';
import styles from './styles.js';

class InfoPane extends Component {

  static navigationOptions = ({ navigation }) => ({
    title: 'GIG INFO',
  });

  checkBringer(b) {
    if (b == 'false') {
      return <Text style={styles.bringerText}>Not A Bringer</Text>
    } else {
      return <Text style={styles.bringerText}>THIS GIG IS A BRINGER</Text>
    }
  }

  render() {

    const { gig, postcode, venue, image, bringer, dayOfWeek, MC } = this.props.navigation.state.params.clickedItem;
    const { Walkins, Promoter, extUrl, nearestTube, tubeImg1, tubeImg2 } = this.props.navigation.state.params.clickedItem;

    return (
      <BackgroundImage>
        <View style={styles.appContainer}>



          <Text style={styles.title}>{gig}</Text>

          <View style={styles.infoPaneContainer}>

            <Text style={styles.gigInfoBold}>@ {venue}</Text>
            <Text style={styles.gigInfoNormal}>{postcode}</Text>


            {this.checkBringer(bringer)}

            <Image
                style={{ marginTop: 10, opacity: 0.7, height: 250, width: 250, borderWidth: 2, zIndex: 10 }}
                source={{ uri: `${image}` }}
              />

            <Image
                style={{ marginTop: 10, opacity: 0.7, height: 250, width: 250, borderWidth: 2, zIndex: 10 }}
                source={{ uri: `${tubeImg1}` }}
              />

          </View>

          <TubeSignsContainer tubeImg1={tubeImg1} tubeImg2={tubeImg2} />

          <Text style={styles.text}>Click Here For External Link</Text>
        </View>
      </BackgroundImage>
    )
  }
}

export default InfoPane;
