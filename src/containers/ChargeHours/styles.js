import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  title1: {
    fontFamily: 'Cochin',
    fontSize: 42,
    marginBottom: 16,
    marginTop: 80,
    textAlign: 'center',
    color: '#ffffff'
  },
  title2: {
    fontFamily: 'sans-serif-condensed',
    fontSize: 24,
    marginBottom: 30,
    marginTop: 20,
    textAlign: 'center'
  },
  title3: {
    fontFamily: 'sans-serif-condensed',
    fontSize: 24
  },
  container1: {
    flex: 1,
    backgroundColor: '#5edfff',
    paddingHorizontal: 60
  },
  container2: {
    flexDirection: 'row',
    flex: 1,
    marginTop: 30,
    justifyContent: 'center'
  },
  container3: {
    marginBottom: 30,
    flex: 1,
    justifyContent: 'flex-end'
  },
  container4: {
    backgroundColor: '#ffffff'
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    alignSelf: 'stretch',
    marginBottom: 10,
    backgroundColor: '#ffffff',
    paddingHorizontal: 5,
    fontSize: 18,
    justifyContent: 'center'
  },
  button: {
    alignSelf: 'flex-end'
  }
});

export default styles;
