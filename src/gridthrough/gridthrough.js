import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import BackgroundImage from '../components/backgroundimage/backgroundImage';
import Grid from '../components/grid/grid';
import { getDayTitle } from '../lib/reuseableFunctions';
import styles from './styles.js';

// Results Page is hardcoded. to these gigs in state.

class GridThrough extends Component {

  constructor(props) {
    super(props)

    this.state = {
      gigs: []
    }
  }

  static navigationOptions = ({ navigation }) => ({
    title: `${navigation.state.params.clickedItem}`,
  });

  componentWillMount() {
    this.callFetchGigsBasedOnSelectedDay();
  }

  callFetchGigsBasedOnSelectedDay() {
    let d = this.props.navigation.state.params.clickedItem;
    if (d === 'Tonight') {
      d = getDayTitle();
      this.fetchGigs(d);
    } else if (d === 'Tomorrow') {
      d = getDayTitle();
      switch(d) {
        case 'Mon':
          return this.fetchGigs('Tue');
          break;
        case 'Tue':
          return this.fetchGigs('Wed');
          break;
        case 'Wed':
          return this.fetchGigs('Thu');
          break;
        case 'Thu':
          return this.fetchGigs('Fri');
          break;
        case 'Fri':
          return this.fetchGigs('Sat');
          break;
        case 'Sat':
          return this.fetchGigs('Sun');
          break;
        case 'Sun':
          return this.fetchGigs('Mon');
          break;
      }
      return d;
    } else {
      return this.fetchGigs(d);
    }
  }

  fetchGigs(day) {
    fetch(`https://open-mic-api.herokuapp.com/${day}`)
      .then(result => result.json())
      .then(json => {
        this.setState({
          gigs: json
        })
      })
      .catch(err => console.log('fetch gigs error: ', err));
  }


  render() {
    const { params } = this.props.navigation.state;
    const { navigate } = this.props.navigation;

    return (
      <BackgroundImage>
        <View style={styles.appContainer}>

           <Text style={styles.title}>{params.clickedItem}</Text>

           <View style={styles.gridContainer}>

           {this.state.gigs.map((each, i) =>

           <TouchableOpacity
             key={i}
             style={styles.textContainer}
             onPress={() => navigate('InfoPane', { clickedItem: each })}
             >

             <View>
                 <Text style={styles.text}>
                   {each.gig}
                 </Text>
             </View>

           </TouchableOpacity>
           )}


           </View>




         </View>
      </BackgroundImage>
    )
  }
}

export default GridThrough;
