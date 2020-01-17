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
    <AppIntro skipBtnLabel='Atrás'>
      <View style={[styles.slide, { backgroundColor: '#ecfcff' }]}>
        <HoursLoad />
      </View>
      <View>
        <ListProjects onChange={setProject} />
      </View>
      <View style={styles.slide2}>
        <ChargeHours onChangehours={setHours} onChangeHourType={setHourType} />
      </View>
      <View style={[styles.slide, { backgroundColor: '#b2fcff' }]}>
        <AddDescription onChange={setDescription} />
      </View>
      <View style={[styles.slide, { backgroundColor: '#5edfff' }]}>
        <Schedule onChange={setDateRange} />
      </View>
      <View style={[styles.slide, { backgroundColor: '#5edfff ' }]}>
        <Summary
          description={description}
          dateRange={dateRange}
          hourType={hourType}
          project={project}
          hours={hours}
        />
      </View>
      <View style={[styles.slide, { backgroundColor: '#3e64ff' }]}>
        <CheckSend />
      </View>
    </AppIntro>
  );
};

export default Hours;
