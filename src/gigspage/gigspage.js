import React, { Component } from 'react';
import { Text, View, Alert } from 'react-native';

import BackgroundImage from './BackgroundImage';
import Grid from '../components/Grid/grid';
import styles from './styles.js';


class GigsPage extends Component {

  constructor() {
    super();

    this.state = {
      today: 'BEFORE'
    }

  }

  static navigationOptions = {
    title: 'GIGS',
  };


  getDayOfWeek() {

    let d = new Date();
    let i = d.getDay().toString();

    let daysOfWeek = {
      0: 'Sunday',
      1: 'Monday',
      2: 'Tuesday',
      3: 'Wednesday',
      4: 'Thursday',
      5: 'Friday',
      6: 'Saturday'
    }
    return daysOfWeek[i];
  }



  componentDidMount() {
    let day = this.getDayOfWeek();

    this.setState({
      today: day
    })

    console.log('CDM: ', day);
  }

  render() {
    return (
      <BackgroundImage>

        <View style={styles.appContainer}>

           <Text style={styles.title}>{this.state.today}</Text>

           <Grid />

         </View>
      </BackgroundImage>
    )
  }
}

export default GigsPage;
