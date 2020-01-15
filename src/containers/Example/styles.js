import { StyleSheet } from 'react-native';

import colors from '../../theme/colors';

const styles = StyleSheet.create({
  background: {
    flex: 1
  },
  logo: {
    opacity: 0.3,
    resizeMode: 'cover',
    marginLeft: -256
  },
  title: {
    color: colors.black,
    fontSize: 40,
    fontWeight: '600',
    paddingTop: 96,
    textAlign: 'center'
  },
  linkContainer: {
    marginTop: 30
  },
  link: {
    fontSize: 20,
    fontWeight: '800',
    textAlign: 'center',
    color: colors.primary
  },
  engine: {
    color: colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right'
  }
});

export default styles;
