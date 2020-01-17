import React from 'react';
import { View, Text } from 'react-native';
import { TextInput } from 'react-native-paper';
import LottieView from 'lottie-react-native';

import styles from './styles';

const Summary = () => (
  <View style={{ flex: 1, flexDirection: 'column' }}>
    <Text style={styles.container}>Summary</Text>
    <View style={styles.container}>
      <TextInput style={styles.containerText} />
    </View>
    <View style={{ flex: 1 }}>
      <LottieView
        style={{ flex: 1, marginTop: 40 }}
        source={require('../../resources/animations/8033-slide-arrow.json')}
        autoPlay
        loop
      />
    </View>
  </View>
);

export default Summary;
