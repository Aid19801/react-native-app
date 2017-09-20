import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';

import HomePage from './src/homepage/homepage';
import GigsPage from './src/gigspage/gigspage';
import ActsPage from './src/actspage/actspage';
import NewsPage from './src/newspage/newspage';
import ResultsPage from './src/resultspage/resultspage';

const App = StackNavigator({
  Home: { screen: GigsPage },
  Gigs: { screen: GigsPage },
  Acts: { screen: ActsPage },
  News: { screen: NewsPage },
  ResultsPage: { screen: ResultsPage },
})

export default App;
