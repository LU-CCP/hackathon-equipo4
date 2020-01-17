import React, { useCallback } from 'react';
import { Provider } from 'react-native-paper';
import SplashScreen from 'react-native-splash-screen';
import { StatusBar } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { NavigationActions } from 'react-navigation';
import { SafeAreaProvider } from 'react-native-safe-area-view';

import { makeGetNav } from '../../selectors/nav';
import { AppNavigator, DrawerNavigator } from '../../navigation';
import { useActions, useBackHandler, useMount } from '../../hooks';
import colors from '../../theme/colors';
import theme from '../../theme';

import { SPLASH_SCREEN_HIDE_TIMEOUT } from './utils';

const { back } = NavigationActions;

const Root = () => {
  const dispatch = useDispatch();
  const nav = useSelector(makeGetNav());
  const { onGoBack } = useActions({
    onGoBack: back
  });

  useMount(() => setTimeout(SplashScreen.hide, SPLASH_SCREEN_HIDE_TIMEOUT));

  const handleBackPress = useCallback(() => {
    if (nav.index <= 0) {
      return false;
    }

    onGoBack();

    return true;
  }, [nav.index, onGoBack]);

  useBackHandler(handleBackPress);

  return (
    <SafeAreaProvider>
      <Provider theme={theme}>
        <StatusBar backgroundColor={colors.primary} barStyle='dark-content' />
        <DrawerNavigator
          {...{ nav, user: { name: 'Sippur' }, onNavigate: () => {} }}
        >
          <Provider theme={theme}>
            <AppNavigator state={nav} dispatch={dispatch} />
          </Provider>
        </DrawerNavigator>
      </Provider>
    </SafeAreaProvider>
  );
};

export default Root;
