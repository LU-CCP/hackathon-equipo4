import { StyleSheet } from 'react-native';

import theme from '../../../theme';

const { colors } = theme;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary
  },
  safeArea: {
    flex: 1,
    backgroundColor: colors.surface
  },
  headerTitle: {
    margin: 5,
    textAlign: 'center',
    paddingTop: 16
  }
});

export default styles;
