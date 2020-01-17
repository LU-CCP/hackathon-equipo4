import {
  createStackNavigator,
  TransitionPresets
} from 'react-navigation-stack';

import { Example, Hours, Login } from '../../containers';
import { HOUR_SCREEN } from '../screens';

const RootNavigator = createStackNavigator(
  {
    Example,
    Hours,
    Login
  },
  {
    initialRouteName: HOUR_SCREEN,
    headerMode: 'none',
    defaultNavigationOptions: {
      ...TransitionPresets.SlideFromRightIOS,
      cardOverlayEnabled: false
    }
  }
);

export default RootNavigator;
