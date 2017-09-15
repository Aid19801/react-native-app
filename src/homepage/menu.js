import React from 'react';
import { Text, View } from 'react-native';

class Menu extends React.Component {
  render() {
    return (
      <View style={{flex: 0.5, flexDirection: 'column'}}>
         <View style={{width: 250, height: 50, backgroundColor: 'powderblue'}}>
          <Text>GIGS</Text>
         </View>

         <View style={{width: 250, height: 50, backgroundColor: 'skyblue'}} />
         <View style={{width: 250, height: 50, backgroundColor: 'steelblue'}} />
       </View>
    );
  }
}

export default Menu;
