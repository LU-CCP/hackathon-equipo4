import { StyleSheet } from 'react-native';

import theme from '../../../theme';

const { colors } = theme;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.surface
  },
  safeArea: {
    flex: 1,
    backgroundColor: colors.surface
  },
  headerTitle: {
    margin: 5,
    textAlign: 'center',
    paddingTop: 15
  }
});

export default styles;
