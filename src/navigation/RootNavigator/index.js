import {
  createStackNavigator,
  TransitionPresets
} from 'react-navigation-stack';

import { Example, Menu } from '../../containers';
import { EXAMPLE_SCREEN } from '../screens';

const RootNavigator = createStackNavigator(
  {
    Example,
    Menu
  },
  {
    initialRouteName: EXAMPLE_SCREEN,
    headerMode: 'none',
    defaultNavigationOptions: {
      ...TransitionPresets.SlideFromRightIOS,
      cardOverlayEnabled: false
    }
  }
);

export default RootNavigator;
