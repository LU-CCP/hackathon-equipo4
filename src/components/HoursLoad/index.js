import React from 'react';
import { View, Text } from 'react-native';
import { Button } from 'react-native-paper';
import LottieView from 'lottie-react-native';

import styles from './styles';

const HoursLoad = () => (
  <View>
    <Text style={styles.textContainer}>Cargar Horas</Text>
    <LottieView
      source={require('../../resources/animations/2887-listen-state.json')}
      autoPlay
      loop
    />
    <View style={styles.containerBoton}>
      <Button mode='contained' style={styles.boton}>
        Menu
      </Button>
    </View>
  </View>
);

export default HoursLoad;
