import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';

import HomePage from './src/homepage/homepage';
import GigsPage from './src/gigspage/gigspage';
import ActsPage from './src/actspage/actspage';
import NewsPage from './src/newspage/newspage';
import GridThrough from './src/gridthrough/gridthrough';
import InfoPane from './src/infopane/infopane';

// basic navigation
// need to change home to being homepage again
const App = StackNavigator({
  Home: { screen: InfoPane },
  Gigs: { screen: GigsPage },
  Acts: { screen: ActsPage },
  News: { screen: NewsPage },
  GridThrough: { screen: GridThrough },
  InfoPane: { screen: InfoPane },
})

export default App;
