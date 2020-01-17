import React from 'react';
import AppIntro from 'rn-falcon-app-intro';
import { StyleSheet, Text, View } from 'react-native';

import { AddDescription, HoursLoad } from '../../components';

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
    padding: 15
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold'
  }
});

const Hours = () => (
  <AppIntro>
    <View style={[styles.slide, { backgroundColor: 'white' }]}>
      <AddDescription />
    </View>
    <View style={[styles.slide, { backgroundColor: 'white' }]}>
      <HoursLoad />
    </View>
    <View style={[styles.slide, { backgroundColor: '#fa931d' }]}>
      <View level={8}>
        <Text style={styles.text}>Page 3</Text>
      </View>
      <View level={0}>
        <Text style={styles.text}>Page 3</Text>
      </View>
      <View level={-10}>
        <Text style={styles.text}>Page 3</Text>
      </View>
    </View>
    <View style={[styles.slide, { backgroundColor: '#a4b602' }]}>
      <View level={5}>
        <Text style={styles.text}>Page 4</Text>
      </View>
      <View level={10}>
        <Text style={styles.text}>Page 4</Text>
      </View>
      <View level={15}>
        <Text style={styles.text}>Page 4</Text>
      </View>
    </View>
  </AppIntro>
);

export default Hours;
