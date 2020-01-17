import React, { memo, useCallback } from 'react';
import PropTypes from 'prop-types';
import { Drawer, Title } from 'react-native-paper';
import { ScrollView } from 'react-native';

import { SafeAreaView } from '../../../components';

import styles from './styles';
import { ROUTES } from './utils';

const DrawerItems = ({ currentRouteName, userName, onGoTo }) => {
  const handleGoTo = useCallback(newRouteName => () => onGoTo(newRouteName), [
    onGoTo
  ]);

  const renderItem = useCallback(
    ({ key, icon, activeIcon, ...rest }) => (
      <Drawer.Item
        {...rest}
        key={key}
        active={key === currentRouteName}
        icon={key === currentRouteName ? activeIcon : icon}
        onPress={handleGoTo(key)}
      />
    ),
    [currentRouteName, handleGoTo]
  );

  return (
    <SafeAreaView
      style={styles.safeArea}
      forceInset={{ top: 'always', right: 'never', left: 'always' }}
    >
      <ScrollView style={styles.container}>
        <Drawer.Section>
          <Title style={styles.headerTitle}>{userName}</Title>
        </Drawer.Section>
        <Drawer.Section title='Menu'>{ROUTES.map(renderItem)}</Drawer.Section>
      </ScrollView>
    </SafeAreaView>
  );
};

DrawerItems.propTypes = {
  currentRouteName: PropTypes.string.isRequired,
  userName: PropTypes.string.isRequired,
  onGoTo: PropTypes.func.isRequired
};

export default memo(DrawerItems);
