import {
  createReactNavigationReduxMiddleware,
  createReduxContainer
} from 'react-navigation-redux-helpers';

import { makeGetNav } from '../selectors/nav';

import RootNavigator from './RootNavigator';
import DrawerNavigator from './DrawerNavigator';

const navigationMiddleware = createReactNavigationReduxMiddleware(makeGetNav());

const AppNavigator = createReduxContainer(RootNavigator);

export { navigationMiddleware, AppNavigator, RootNavigator, DrawerNavigator };
