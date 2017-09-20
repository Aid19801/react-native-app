import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  menuContainer: {
  flex: 0.6,
  flexDirection: 'column',
  justifyContent: 'space-between',
  marginBottom: 250
  },

  menuItemContainer: {
    height: '10em',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 250,
    height: 50,
    marginBottom: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    borderWidth: 0.5,
    borderColor: 'black',
  },

  text: {
    color: 'white',
    fontSize: 23,
    margin: 0,
  },
});

export default styles;
