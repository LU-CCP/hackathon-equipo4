import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { ImageBackground, Text, TouchableOpacity } from 'react-native';
import { useSelector } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import openURLInBrowser from 'react-native/Libraries/Core/Devtools/openURLInBrowser';

import { fetchText } from '../../actions/example';
import { makeGetData, makeGetStatus } from '../../selectors/example';
import { useActions } from '../../hooks';
import { Example as ExampleComponent } from '../../components';
import { URL_REACT_NATIVE } from '../../config/constants';
import {
  WELCOME_MSG,
  LEARN_REACT_NATIVE_MSG,
  HERMES_ENGINE
} from '../../config/messages';
import reactImage from '../../resources/images/react.png';
import Main from '../Main';

import styles from './styles';

const Example = ({ navigation }) => {
  const {
    data: { text },
    status: { fetching }
  } = useSelector(
    createStructuredSelector({
      data: makeGetData(),
      status: makeGetStatus()
    })
  );
  const { onFetchText } = useActions({
    onFetchText: fetchText
  });

  const handleOpenURLInBrowserl = useCallback(
    () => openURLInBrowser(URL_REACT_NATIVE),
    []
  );

  return (
    <Main navigation={navigation}>
      <ImageBackground
        source={reactImage}
        style={styles.background}
        imageStyle={styles.logo}
      >
        {!!global.HermesInternal && (
          <Text style={styles.engine}>{HERMES_ENGINE}</Text>
        )}
        <Text style={styles.title}>{WELCOME_MSG}</Text>
        <ExampleComponent {...{ text, fetching, onFetchText }} />
        <TouchableOpacity
          style={styles.linkContainer}
          onPress={handleOpenURLInBrowserl}
        >
          <Text style={styles.link}>{LEARN_REACT_NATIVE_MSG}</Text>
        </TouchableOpacity>
      </ImageBackground>
    </Main>
  );
};

Example.propTypes = {
  navigation: PropTypes.object.isRequired
};

export default Example;
