import React, { Component } from 'react';
import { Text, View, SectionList, TouchableOpacity } from 'react-native';

import styles from './styles.js';

// Grid maps through the gridItems & returns a
// TouchableOpacity / Text component for each arr element.
// clicking on them returns a ResultsPage component.

class Grid extends Component {
  constructor(props) {
    super(props);

  }

  render() {

    const { gridItems } = this.props;
    let nav = this.props.navigate.navigate;

    return (
      <View style={styles.gridContainer}>

          {this.props.gridItems.map((each, i) =>

          <TouchableOpacity
            key={i}
            style={styles.textContainer}
            onPress={() => nav('GridThrough', { clickedItem: each })}
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
