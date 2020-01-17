import { DefaultTheme, Colors } from 'react-native-paper';

import colors from './colors';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    ...colors
  }
};

export default theme;
