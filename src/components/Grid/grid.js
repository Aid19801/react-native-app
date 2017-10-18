import React, { Component } from 'react';
import { Text, View, SectionList, TouchableOpacity } from 'react-native';

import styles from './styles.js';

// Grid maps through the gridItems & returns a
// TouchableOpacity / Text component for each arr element.
// clicking on them returns a ResultsPage component.

const Grid = (props) => (

  <View style={styles.gridContainer}>

      {props.gridItems.map((each, i) =>

      <TouchableOpacity
        key={i}
        style={styles.textContainer}
        onPress={() => props.navigate.navigate('GridThrough', { clickedItem: each })}
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

export default Grid;
