import {
  createStackNavigator,
  TransitionPresets
} from 'react-navigation-stack';

import { Example, ChargeHours } from '../../containers';
import { CHARGE_HOURS_SCREEN } from '../screens';

const RootNavigator = createStackNavigator(
  {
    Example,
    ChargeHours
  },
  {
    initialRouteName: CHARGE_HOURS_SCREEN,
    headerMode: 'none',
    defaultNavigationOptions: {
      ...TransitionPresets.SlideFromRightIOS,
      cardOverlayEnabled: false
    }
  }
);

export default RootNavigator;
