import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { RadioButton } from 'react-native-paper';

import styles from './styles';

const ListProjects = ({ onChange }) => {
  const projects = [
    { text: 'Proyecto 1', value: '1' },
    { text: 'Proyecto 2', value: '2' },
    { text: 'Proyecto 3', value: '3' },
    { text: 'Proyecto 4', value: '4' }
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
        justifyContent: 'center',
        height: '100%'
      }}
    >
      <Text>Selecciona tu proyecto</Text>
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
