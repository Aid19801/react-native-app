import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';

// redux
import { Provider } from 'react-redux';
import store from './src/store/store';

import HomePage from './src/homepage/homepage';
import GigsPage from './src/gigspage/gigspage';
import GridThrough from './src/gridthrough/gridthrough';
import InfoPane from './src/infopane/infopane';

// basic navigation
// need to change home to being homepage again
const AppContainer = StackNavigator({
  Home: { screen: HomePage },
  Gigs: { screen: GigsPage },
  GridThrough: { screen: GridThrough },
  InfoPane: { screen: InfoPane },
})

const App = () => (
  <Provider store={store}>
    <AppContainer />
  </Provider>
)
export default App;
