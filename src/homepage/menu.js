import React, { Component } from 'react';
import { Text, View, Alert } from 'react-native';
import styles from './menuStyles.js';

class Menu extends Component {
  constructor(props) {
    super(props)
  }

  render() {

    const { navigate } = this.props;

    return(

      <View style={styles.menuContainer}>

         <View
          style={styles.menuItemContainer}
          >
            <Text
              style={styles.text}
              onPress={() => navigate('Gigs')}
            >
            GIGS
            </Text>

         </View>

         <View
          style={styles.menuItemContainer}
          >
            <Text
              style={styles.text}
              onPress={() => navigate('Acts')}
            >
            ACTS
            </Text>
         </View>

         <View
          style={styles.menuItemContainer}
          >
            <Text
              style={styles.text}
              onPress={() => navigate('News')}
            >
            NEWS
            </Text>
         </View>

       </View>
    )
  }
}

export default Menu;
