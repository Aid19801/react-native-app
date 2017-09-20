import React, { Component } from 'react';
import { Text, View } from 'react-native';
import styles from './styles.js';

class ResultsPage extends Component {

  constructor(props) {
    super(props)
  }

  static navigationOptions = ({ navigation }) => ({
    title: `${navigation.state.params.results}`,
  });

  render() {

    const { name } = this.props;
    const { params } = this.props.navigation.state;

    return (
      <View style={styles.menuContainer}>

         <Text>I AM {params.results}</Text>

       </View>
    )
  }
}

export default ResultsPage;
