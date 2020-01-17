import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { RadioButton } from 'react-native-paper';

import styles from './styles';

const ListProjects = ({ onChange }) => {
  const projects = [
    { text: 'MELI', value: '1' },
    { text: 'LCNI', value: '2' },
    { text: 'Parque Arauco', value: '3' },
    { text: 'ACHS', value: '4' }
  ];
  const [select, setSelect] = useState();

  const handleSelected = value => {
    setSelect(value);
    const { text } = projects.find(p => p.value === value) || {};

    onChange(text);
    console.log(text);
  };

  return (
    <View
      style={{
        alignItems: 'center',
        height: '100%'
      }}
    >
      <Text
        style={{
          fontSize: 30,
          fontWeight: 'bold',
          marginBottom: 30,
          textAlign: 'center',
          marginTop: 30
        }}
      >
        Selecciona tu proyecto
      </Text>
      <View>
        <RadioButton.Group
          onValueChange={handleSelected}
          value={select}
          style={{ flex: 1 }}
        >
          {projects.map(({ text, value }) => (
            <View style={styles.views}>
              <Text style={styles.text}>{text}</Text>
              <RadioButton style={styles.radio} value={value} />
            </View>
          ))}
        </RadioButton.Group>
        <Text style={styles.text}> {select}</Text>
      </View>
    </View>
  );
};

export default ListProjects;
