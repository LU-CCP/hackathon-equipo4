import React, { Component } from 'react';
import { StyleSheet, Text, View, Alert } from 'react-native';
import CalendarPicker from 'react-native-calendar-picker';
import moment from 'moment';

export default class Schedule extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedStartDate: null,
      selectedEndDate: null
    };
    this.handleDateChange = this.handleDateChange.bind(this);
  }

  handleCallback = () => {
    const { onChange } = this.props;
    const { selectedStartDate, selectedEndDate } = this.state;

    onChange({
      startDate: selectedStartDate,
      endDate: selectedEndDate
    });
  };

  handleDateChange(date, type) {
    if (type === 'END_DATE') {
      this.setState({
        selectedEndDate: moment(date).format('DD-MM-YYYY')
      });
    } else {
      this.setState({
        selectedStartDate: moment(date).format('DD-MM-YYYY'),
        selectedEndDate: null
      });
    }
  }

  render() {
    const { selectedStartDate, selectedEndDate } = this.state;
    const minDate = new Date(2020, 1, 1); // Today
    const maxDate = new Date(2022, 6, 3);
    const startDate = selectedStartDate ? selectedStartDate.toString() : '';
    const endDate = selectedEndDate ? selectedEndDate.toString() : '';

    return (
      <View style={styles.container}>
        <Text
          style={{
            fontSize: 30,
            fontWeight: 'bold',
            marginBottom: 30,
            textAlign: 'center'
            // marginTop: 30
          }}
        >
          Programa tu carga
        </Text>
        <CalendarPicker
          locale='es'
          startFromMonday
          allowRangeSelection
          minDate={minDate}
          maxDate={maxDate}
          todayBackgroundColor='#f2e6ff'
          selectedDayColor='#3e64ff'
          selectedDayTextColor='#FFFFFF'
          handleDateChange={this.handleDateChange}
          weekdays={['Lun', 'Mar', 'Mie', 'Jue', 'Vie', 'Sab', 'Dom']}
          months={[
            'Enero',
            'Febrero',
            'Marzo',
            'Abril',
            'Mayo',
            'Junio',
            'Julio',
            'Agosto',
            'Septiembre',
            'Octubre',
            'Noviembre',
            'Diciembre'
          ]}
          previousTitle='Anterior'
          nextTitle='Próximo'
        />

        <View>
          <Text>Fecha de inicio: {startDate}</Text>
          <Text>Fecha de término: {endDate}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    marginTop: 100
  }
});
