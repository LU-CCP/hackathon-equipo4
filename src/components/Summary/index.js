import React from 'react';
import { View, Text } from 'react-native';
import { TextInput, Title, Paragraph } from 'react-native-paper';
import LottieView from 'lottie-react-native';

import styles from './styles';

const Summary = ({ description, dateRange, hourType, project, hours }) => (
  <View style={{ flex: 1, flexDirection: 'column' }}>
    <Text style={styles.container}>Summary</Text>
    <View style={styles.container}>
      <View style={styles.container2}>
        <Title>Proyecto:</Title>
        <Paragraph>{project}</Paragraph>
      </View>
      <View style={styles.container2}>
        <Title>Horas:</Title>
        <Paragraph>{hours}</Paragraph>
      </View>
      <View style={styles.container2}>
        <Title>Tipo de hora:</Title>
        <Paragraph>{hourType}</Paragraph>
      </View>
      <View style={styles.container2}>
        <Title>Programar carga:</Title>
        <Paragraph>Desde: {dateRange ? dateRange.startDate : ''}</Paragraph>
        <Paragraph>Hasta: {dateRange ? dateRange.endDate : ''}</Paragraph>
      </View>
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
