import React from 'react';
import AppIntro from 'rn-falcon-app-intro';
import { StyleSheet, Text, View } from 'react-native';

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
    <View style={[styles.slide, { backgroundColor: '#fa931d' }]}>
      <View level={10}>
        <Text style={styles.text}>Principal microfono</Text>
      </View>
      <View level={15}>
        <Text style={styles.text}>Page 1</Text>
      </View>
      <View level={8}>
        <Text style={styles.text}>Page 1</Text>
      </View>
    </View>
    <View style={[styles.slide, { backgroundColor: '#a4b602' }]}>
      <View level={-10}>
        <Text style={styles.text}> </Text>
      </View>
      <View level={5}>
        <Text style={styles.text}>Page 2</Text>
      </View>
      <View level={20}>
        <Text style={styles.text}>Page 2</Text>
      </View>
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
