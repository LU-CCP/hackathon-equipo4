import React from 'react';
import PropTypes from 'prop-types';

import { SafeAreaView } from '../../components';
import { useNavigationEvents } from '../../hooks';
import { VOID_FUNC } from '../../config/constants';
import testID from '../../utils/testID';

import ids from './identifiers';
import styles from './styles';

const Main = ({ navigation, children, onFocus, onBlur }) => {
  useNavigationEvents(onFocus, onBlur, navigation);

  return (
    <SafeAreaView
      {...testID(`${ids.SCREEN}_${navigation.state.routeName}`)}
      style={styles.safeArea}
      forceInset={{ horizontal: 'always', vertical: 'always' }}
    >
      {children}
    </SafeAreaView>
  );
};

Main.defaultProps = {
  children: null,
  onFocus: VOID_FUNC,
  onBlur: VOID_FUNC
};

Main.propTypes = {
  navigation: PropTypes.object.isRequired,
  children: PropTypes.node,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func
};

export default Main;
