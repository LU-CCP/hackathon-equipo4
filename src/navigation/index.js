import {
  createReactNavigationReduxMiddleware,
  createReduxContainer
} from 'react-navigation-redux-helpers';

import { makeGetNav } from '../selectors/nav';

import RootNavigator from './RootNavigator';

const navigationMiddleware = createReactNavigationReduxMiddleware(makeGetNav());

const AppNavigator = createReduxContainer(RootNavigator);

export { navigationMiddleware, AppNavigator, RootNavigator };
