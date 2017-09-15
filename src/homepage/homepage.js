import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import styles from './styles.js';
import Menu from './menu';

class HomePage extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.pageTitle}>HOME</Text>
        <Menu />
      </View>
    );
  }
}

export default HomePage;
