import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { RadioButton } from 'react-native-paper';

import styles from './styles';

const ListProjects = () => {
  const [select, setSelect] = useState();
  // const opciones = [1, 2, 3];

  const handleSelected = value => {
    setSelect(value);
    console.log('select', select);
  };

  return (
    <View>
      <RadioButton.Group onValueChange={handleSelected}>
        <View>
          <Text>Proyecto 1</Text>
          <RadioButton value='1' />
        </View>
        <View>
          <Text>Proyecto 2</Text>
          <RadioButton value='2' />
        </View>
        <View>
          <Text>Proyecto 3</Text>
          <RadioButton value='3' />
        </View>
      </RadioButton.Group>
      <Text style={styles.text}> {select}</Text>
    </View>
  );
};

export default ListProjects;
