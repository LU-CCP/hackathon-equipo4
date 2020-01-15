import React from 'react';
import PropTypes from 'prop-types';
import { Button, Text, View } from 'react-native';

import { FETCH_TEXT_MSG, FETCHING_MSG } from '../../config/messages';
import testID from '../../utils/testID';

import ids from './identifiers';
import styles from './styles';

const Example = ({ text, fetching, onFetchText }) => (
  <View style={styles.container}>
    <Button
      {...testID(ids.BUTTON_FETCH_TEXT)}
      title={FETCH_TEXT_MSG}
      onPress={onFetchText}
    />
    <Text style={styles.text}> {fetching ? FETCHING_MSG : text}</Text>
  </View>
);

Example.propTypes = {
  text: PropTypes.string.isRequired,
  fetching: PropTypes.bool.isRequired,
  onFetchText: PropTypes.func.isRequired
};

export default Example;
