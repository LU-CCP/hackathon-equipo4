import React from 'react';
import { Button, Text, View } from 'react-native';

import styles from './styles';

const ListProjects = () => (
  <View>
    <Button title={'Project 1 '} />
    <Button title={'Project 2 '} />
    <Button title={'Project 2 '} />
    <Text style={styles.text}> {'hola'}</Text>
  </View>
);

export default ListProjects;
