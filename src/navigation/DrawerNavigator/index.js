import React, {
  useCallback,
  useEffect,
  useImperativeHandle,
  useRef,
  useState
} from 'react';
import PropTypes from 'prop-types';
import { Keyboard } from 'react-native';
import DrawerLayout from 'react-native-gesture-handler/DrawerLayout';

import { VOID_FUNC } from '../../config/constants';
import {
  useBackHandlerEvents,
  useLifecycles,
  useWindowDimensions
} from '../../hooks';
import { getCurrentRouteName } from '../utils';

import DrawerItems from './DrawerItems';
import manager from './manager';
import styles from './styles';
import {
  getDrawerLockMode,
  getDrawerWidth,
  LOCKED_CLOSED,
  DRAGGING,
  SETTLING
} from './utils';

const DrawerNavigator = ({
  children,
  nav,
  user: { name: userName },
  onNavigate
}) => {
  const dimensions = useWindowDimensions();
  const _managerRef = useRef({
    openDrawer: VOID_FUNC,
    closeDrawer: VOID_FUNC
  });
  const _drawerRef = useRef();
  const _drawerStateRef = useRef('');
  const _drawerWillShowRef = useRef(false);
  const [drawerLockMode, setDrawerLockMode] = useState(getDrawerLockMode(nav));
  const [drawerWidth, setDrawerWidth] = useState(getDrawerWidth(dimensions));

  const openDrawer = useCallback(() => {
    if (drawerLockMode !== LOCKED_CLOSED) {
      Keyboard.dismiss();
      _drawerRef.current.openDrawer();
    }
  }, [drawerLockMode]);

  const closeDrawer = useCallback(() => {
    if (_drawerWillShowRef.current) {
      _drawerRef.current.closeDrawer();
    }
  }, []);

  const reOpenDrawer = useCallback(() => {
    if (_drawerWillShowRef.current) {
      openDrawer();
    }
  }, [openDrawer]);

  const handleBackPress = useCallback(() => {
    if (_drawerStateRef.current !== DRAGGING) {
      closeDrawer();
    }

    return true;
  }, [closeDrawer]);

  const backHandlerEvents = useBackHandlerEvents(handleBackPress);

  const handleDrawerStateChanged = useCallback(
    (state, drawerWillShow) => {
      _drawerStateRef.current = state;
      _drawerWillShowRef.current = drawerWillShow;

      switch (state) {
        case DRAGGING:
          if (!drawerWillShow) {
            backHandlerEvents.add();
          }

          break;
        case SETTLING:
          if (drawerWillShow) {
            backHandlerEvents.add();
          } else {
            backHandlerEvents.remove();
          }

          break;

        default:
          break;
      }
    },
    [backHandlerEvents]
  );

  const handleGoTo = useCallback(
    routeName => {
      closeDrawer();

      if (routeName === getCurrentRouteName(nav)) {
        return;
      }

      onNavigate({ routeName });
    },
    [closeDrawer, nav, onNavigate]
  );

  useEffect(
    useCallback(() => {
      const newDrawerWidth = getDrawerWidth(dimensions);

      if (newDrawerWidth !== drawerWidth) {
        setDrawerWidth(newDrawerWidth);
      }
    }, [dimensions, drawerWidth]),
    [dimensions]
  );

  useEffect(
    useCallback(() => {
      reOpenDrawer();
    }, [reOpenDrawer]),
    [drawerWidth]
  );

  useEffect(
    useCallback(() => {
      const newDrawerLockMode = getDrawerLockMode(nav);

      if (newDrawerLockMode !== drawerLockMode) {
        setDrawerLockMode(newDrawerLockMode);
      }
    }, [drawerLockMode, nav]),
    [nav.index]
  );

  useLifecycles(
    () => manager.register(_managerRef.current),
    () => manager.unregister()
  );

  const renderNavigationView = useCallback(
    () => (
      <DrawerItems
        currentRouteName={getCurrentRouteName(nav)}
        userName={userName}
        onGoTo={handleGoTo}
      />
    ),
    [handleGoTo, nav, userName]
  );

  useImperativeHandle(_managerRef, () => ({
    openDrawer,
    closeDrawer
  }));

  return (
    <DrawerLayout
      {...{ drawerLockMode, drawerWidth, renderNavigationView }}
      ref={_drawerRef}
      contentContainerStyle={styles.container}
      keyboardDismissMode='on-drag'
      onDrawerStateChanged={handleDrawerStateChanged}
    >
      {children}
    </DrawerLayout>
  );
};

DrawerNavigator.defaultProps = {
  children: null
};

DrawerNavigator.propTypes = {
  children: PropTypes.node,
  nav: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
  onNavigate: PropTypes.func.isRequired
};

export default DrawerNavigator;
