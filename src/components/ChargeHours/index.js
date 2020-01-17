import React, { useState, useCallback } from 'react';
import {
  View,
  TextInput,
  Text,
  Keyboard,
  TouchableWithoutFeedback
} from 'react-native';
// import { Button } from 'react-native-paper';
import RNPickerSelect from 'react-native-picker-select';

import { useMount } from '../../hooks';

import styles from './styles';

const ChargeHours = ({ onChangehours, onChangeHourType }) => {
  // const { hours, hourType } = onChange;
  const [value, setValue] = useState('productivo');
  const handleValueChange = useCallback(
    newValue => {
      setValue(newValue);
      onChangeHourType(newValue);
    },
    [onChangeHourType]
  );
  const [numberHours, setNumberHours] = useState();
  const numberInputHandler = inputHours => {
    const newHours = inputHours.replace(/[^0-9]/g, '');

    setNumberHours(newHours);
    onChangehours(newHours);
  };

  useMount(() => {
    onChangeHourType('productivo');
  });

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <View style={styles.container1}>
        <View>
          <Text
            style={{
              fontSize: 30,
              fontWeight: 'bold',
              marginBottom: 30,
              textAlign: 'center',
              marginTop: 30
            }}
          >
            Detalla tu carga
          </Text>
          <Text style={styles.title2}>Tipo de Carga</Text>
          <View style={styles.container4}>
            <RNPickerSelect
              value={value}
              onValueChange={handleValueChange}
              items={[
                { label: 'Productiva', value: 'productivo', opacity: 0.7 },
                { label: 'Capacitación', value: 'capacitacion', opacity: 0.7 },
                { label: 'Horas Extras', value: 'horas_extras', opacity: 0.7 }
              ]}
            />
          </View>
        </View>
        <View style={styles.container2}>
          <Text style={styles.title3}>Horas : </Text>
          <TextInput
            style={styles.input}
            keyboardType='number-pad'
            maxLength={1}
            onChangeText={numberInputHandler}
          />
        </View>
        {/* <View style={styles.container3}>
          <Button mode='contained' style={styles.button}>
            Voz
          </Button>
        </View> */}
      </View>
    </TouchableWithoutFeedback>
  );
};

export default ChargeHours;
