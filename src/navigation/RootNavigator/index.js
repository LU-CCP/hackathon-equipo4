import {
  createStackNavigator,
  TransitionPresets
} from 'react-navigation-stack';

import { Example, Hours, Login } from '../../containers';
import { HOURS_SCREEN } from '../screens';

const RootNavigator = createStackNavigator(
  {
    Example,
    Hours,
    Login
  },
  {
    initialRouteName: HOURS_SCREEN,
    headerMode: 'none',
    defaultNavigationOptions: {
      ...TransitionPresets.SlideFromRightIOS,
      cardOverlayEnabled: false
    }
  }
);

export default RootNavigator;
