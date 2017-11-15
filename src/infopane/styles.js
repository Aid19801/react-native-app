import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  appContainer: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      flexWrap: 'wrap',
      marginTop: 10,
      marginBottom: 4,
      marginLeft: 2,
      marginRight: 2,
      backgroundColor: 'rgba(0,0,0,0)',
      alignItems: 'center',
    },
    title: {
      color: 'white',
      fontWeight: 'bold',
      fontFamily: 'Courier New',
      backgroundColor: 'rgba(0,0,0,0.5)',
      paddingTop: 7,
      borderWidth: 1,
      borderColor: 'grey',
      width: '100%',
      height: '10%',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      fontSize: 35,
    },
    infoPaneContainer: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
      height: '80%',
      backgroundColor: 'rgba(0,0,0,0.5)',
      alignItems: 'center',
      borderWidth: 0.5,
      borderColor: 'grey',
      margin: 10,
      },
    text: {
      color: 'white',
      fontFamily: 'Courier New',
      fontWeight: 'bold'
    },
    bringerText: {
      color: 'grey',
      fontFamily: 'Courier New',
      fontWeight: 'bold',
      paddingTop: '2%'
    },
    gigInfoNormal: {
      color: 'white',
      fontFamily: 'Courier New',
      fontWeight: 'bold'
    },
    gigInfoBold: {
      color: 'white',
      fontFamily: 'Courier New',
      fontWeight: 'bold',
      paddingTop: '2%'
    }
});

export default styles;
