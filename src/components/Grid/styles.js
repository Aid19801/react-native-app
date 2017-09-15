import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  gridContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginBottom: 250,
    borderWidth: 0.5,
    borderColor: 'red',
    },
  textContainer: {
    height: '10em',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 250,
    height: 350,
    marginBottom: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    borderWidth: 0.5,
    borderColor: 'white',
  },
  text: {
    borderWidth: 0.5,
    borderColor: 'blue',
  }
});

export default styles;
