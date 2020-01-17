import React, { useRef, useCallback, useState } from 'react';
import VoiceToText, { EVENTS } from 'react-native-voice-oop';
import { View, Text, Button, TouchableWithoutFeedback } from 'react-native';
import LottieView from 'lottie-react-native';

import { useLifecycles, useEventListener, useUnmount } from '../../hooks';

import style from './styles';

const AddDescription = () => {
  const voiceRef = useRef(new VoiceToText());

  const handlePress = useCallback(async () => {
    if (!(await VoiceToText.isRecognizing())) {
      console.log('ok');
      voiceRef.current.start();
    }
  }, []);
  const handleRecord = useCallback(({ value }) => {
    console.log(value);
  }, []);

  useUnmount(() => {
    voiceRef.current.destroy();
    voiceRef.current = null;
  });

  useEventListener(EVENTS.results, handleRecord, voiceRef.current);

  return (
    <View>
      <View style={{ flex: 1, justifyContent: 'center' }}>
        <View style={{ height: 190, justifyContent: 'center', marginTop: 30 }}>
          <TouchableWithoutFeedback onPress={handlePress}>
            <LottieView
              source={require('../../resources/animations/2887-listen-state.json')}
              autoPlay
              loop
            />
          </TouchableWithoutFeedback>
        </View>
      </View>
      <Text>Descripcion</Text>
      <View style={style.nuevoBoton}>
        <Button title='Grabar nuevamente' />
      </View>
      <View>
        <Button title='Modificar texto' />
      </View>
    </View>
  );
};

export default AddDescription;
