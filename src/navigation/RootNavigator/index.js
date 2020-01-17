import {
  createStackNavigator,
  TransitionPresets
} from 'react-navigation-stack';

import { Example, Hours } from '../../containers';
import { EXAMPLE_SCREEN } from '../screens';

const RootNavigator = createStackNavigator(
  {
    Example,
    Hours
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
