import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';

// pages imported for navigation.
// HomePage is basically just the menu.
import HomePage from './src/homepage/homepage';
import GigsPage from './src/gigspage/gigspage';
import ActsPage from './src/actspage/actspage';
import NewsPage from './src/newspage/newspage';

const App = StackNavigator({
  Home: { screen: GigsPage },
  Gigs: { screen: GigsPage },
  Acts: { screen: ActsPage },
  News: { screen: NewsPage }
})

// change GIGS PAGE BACK TO HOMEPAGE
export default App;
