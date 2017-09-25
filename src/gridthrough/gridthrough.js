import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import BackgroundImage from '../components/backgroundimage/backgroundImage';
import Grid from '../components/grid/grid';

import styles from './styles.js';

// Results Page is hardcoded. to these gigs in state.

class GridThrough extends Component {

  constructor(props) {
    super(props)

    this.state = {
      gigs: ['Happy House', 'number 2', 'Chuckle Hut', 'A thing']
    }
  }

  static navigationOptions = ({ navigation }) => ({
    title: `${navigation.state.params.clickedItem}`,
  });

  componentWillMount() {
    let d = this.props.navigation.state.params.clickedItem;
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
                       {each}
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
