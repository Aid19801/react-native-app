import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  appContainer: {
      flex: 1,
      marginTop: 10,
      marginBottom: 4,
      marginLeft: 2,
      marginRight: 2,
      backgroundColor: 'rgba(0,0,0,0)',
      alignItems: 'center',
    },
    titleContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      width: '80%',
      marginBottom: 15,
      marginTop: 5,
      paddingTop: 5,
      paddingBottom: 5,
      backgroundColor: 'rgba(0, 0, 0, 0.3)',
      borderWidth: 0.5,
      borderColor: 'black',
    },
    title: {
      color: 'white',
      fontWeight: 'bold',
      fontFamily: 'Courier New',
      backgroundColor: 'rgba(0,0,0,0)',
      fontSize: 35,
    }
});

export default styles;
