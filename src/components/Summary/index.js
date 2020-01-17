import React from 'react';
import { View, Text } from 'react-native';
import { TextInput, Button } from 'react-native-paper';

import styles from './styles';

const Summary = () => (
  <View>
    <Text>Resumen</Text>
    <View>
      <TextInput style={styles.containerText} label='Resumen' />
    </View>
  </View>
);

export default Summary;
