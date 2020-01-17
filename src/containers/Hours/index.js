import React, { useState } from 'react';
import AppIntro from 'rn-falcon-app-intro';
import { StyleSheet, Text, View } from 'react-native';

import {
  AddDescription,
  Schedule,
  ChargeHours,
  ListProjects,
  HoursLoad,
  CheckSend
} from '../../components';
import Summary from '../../components/Summary';

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
    padding: 15
  },
  slide2: {
    flex: 1,
    backgroundColor: '#9DD6EB',
    padding: 15
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold'
  }
});

const Hours = () => {
  const [description, setDescription] = useState();
  const [dateRange, setDateRange] = useState();
  const [hourType, setHourType] = useState();
  const [hours, setHours] = useState();

  const [project, setProject] = useState();

  return (
    <AppIntro>
      <View>
        <HoursLoad />
      </View>
      <View>
        <ListProjects onChange={setProject} />
      </View>
      <View style={styles.slide2}>
        <ChargeHours onChangehours={setHours} onChangeHourType={setHourType} />
      </View>
      <View style={[styles.slide, { backgroundColor: 'white' }]}>
        <AddDescription onChange={setDescription} />
      </View>
      <View style={[styles.slide, { backgroundColor: 'white' }]}>
        <Schedule onChange={setDateRange} />
      </View>
      <View style={[styles.slide, { backgroundColor: 'white' }]}>
        <Summary
          description={description}
          dateRange={dateRange}
          hourType={hourType}
          project={project}
          hours={hours}
        />
      </View>
      <View style={[styles.slide, { backgroundColor: 'white' }]}>
        <CheckSend />
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
};

export default Hours;
