import React, { Component } from 'react';
import { Text, View, SectionList, TouchableOpacity } from 'react-native';

import styles from './styles.js';


class Grid extends Component {
  constructor(props) {
    super(props);

  }

  render() {

    const { gridItems, navigate } = this.props;

    return (
      <View style={styles.gridContainer}>

          {this.props.gridItems.map((each, i) =>

          <TouchableOpacity
            key={i}
            style={styles.textContainer}
            onPress={() => navigate('ResultsPage')}
            >
            <View>
                <Text style={styles.text}>
                  {each}
                </Text>
            </View>
          </TouchableOpacity>

          )}

      </View>



    )
  }
}

export default Grid;
