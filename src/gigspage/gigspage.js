import React, { Component } from 'react';
import { Text, View, Alert } from 'react-native';

import BackgroundImage from './BackgroundImage';
import Grid from '../components/Grid/grid';
import styles from './styles.js';


class GigsPage extends Component {

  static navigationOptions = {
    title: 'GIGS',
  };


  shuffleDays() {
    console.log('props: ', this.props);
    let arr = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    let today = new Date().toString().slice(0, 3);

    switch (today) {
        case 'Sun':
            arr = arr;
            break;
        case 'Mon':
            arr = ['Tonight', 'Tomorrow', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
            N;
        case 'Tue':
            arr = ['Tonight', 'Tomorrow', 'Thu', 'Fri', 'Sat', 'Sun', 'Mon'];
            break;
        case 'Wed':
            arr = ['Tonight', 'Tomorrow', 'Fri', 'Sat', 'Sun', 'Mon', 'Tue'];
            break;
        case 'Thu':
            arr = ['Tonight', 'Tomorrow', 'Sat', 'Sun', 'Mon', 'Tue', 'Wed'];
            break;
        case 'Fri':
            arr = ['Tonight', 'Tomorrow', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu'];
            break;
        case 'Sat':
            arr = ['Tonight', 'Tomorrow', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri'];
    }

    return arr;
  }

  getDayTitle() {
    let d = new Date().toString();
    let e = d.slice(0, 3);
    return e;
  }

  render() {

    let arrayOfDays = this.shuffleDays();

    return (
      <BackgroundImage>

        <View style={styles.appContainer}>

           <Text style={styles.title}>{this.getDayTitle()}</Text>

           <Grid
            gridItems={arrayOfDays}
            navigate={this.props.navigation}
            />

            <View>
              <Text style={styles.title}>
                I am Results
              </Text>
            </View>

         </View>
      </BackgroundImage>
    )
  }
}

export default GigsPage;
