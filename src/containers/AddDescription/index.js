import React from 'react';
import { View, Text, Button, LottieView } from 'react-native';

import style from './styles';

const AddDescription = () => (
  <View>
    <Text>Descripcion</Text>
    <View style={style.Boton1}>
      <Button title='Grabar nuevamente' />
    </View>
    <View style={style.Boton2}>
      <Button title='Modificar texto' />
    </View>
  </View>
);

export default AddDescription;
