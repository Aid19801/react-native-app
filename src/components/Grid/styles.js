import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  gridContainer: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    height: '80%',
    borderWidth: 0.5,
    borderColor: 'black',
    },
  textContainer: {
    height: '10em',
    flex: 0.2,
    alignItems: 'center',
    justifyContent: 'center',
    width: 250,
    height: 75,
    marginBottom: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
  },
  text: {
    color: 'white',
    fontFamily: 'Courier New',
    fontWeight: 'bold'
  }
});

export default styles;
