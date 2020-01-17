import React from 'react';
import { View, Text } from 'react-native';
import { TextInput, Button } from 'react-native-paper';

import styles from '../AddDescription/styles';

const Summary = () => (
  <View>
    <Text>Resumen</Text>
    <View style={styles.containerText}>
      <TextInput label='Resumen' />
    </View>
  </View>
);

export default Summary;
