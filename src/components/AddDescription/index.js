import React, { useRef, useCallback, useState } from 'react';
import VoiceToText, { EVENTS } from 'react-native-voice-oop';
import { View, Text, Button, TouchableWithoutFeedback } from 'react-native';
import LottieView from 'lottie-react-native';
import { TextInput } from 'react-native-paper';

import { useLifecycles, useEventListener, useUnmount } from '../../hooks';

import style from './styles';

const AddDescription = () => {
  const voiceRef = useRef(new VoiceToText());
  const [text, setText] = useState('');
  const [disableInput, setDisableInput] = useState(true);
  const [playMicrophone, setPlayMicrophone] = useState(false);

  const handlePress = useCallback(async () => {
    setPlayMicrophone(true);

    if (!(await VoiceToText.isRecognizing())) {
      console.log('ok');
      voiceRef.current.start();
    }
  }, []);
  const handleRecord = useCallback(({ value }) => {
    console.log(value);
    setText(value[0]);
  }, []);

  useUnmount(() => {
    voiceRef.current.destroy();
    voiceRef.current = null;
  });

  useEventListener(EVENTS.results, handleRecord, voiceRef.current);

  const textInputhandler = value => {
    setText(value);
    setPlayMicrophone(false);
  };

  const handleModifyInput = () => {
    setDisableInput(false);
  };

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
      <View style={{ flex: 1 }}>
        <TextInput
          value={text}
          onChangeText={textInputhandler}
          mode='outlined'
          disabled={disableInput}
        />
      </View>
      <View style={style.nuevoBoton}>
        <Button title='Grabar nuevamente' />
      </View>
      <View>
        <Button title='Modificar texto' onPress={handleModifyInput} />
      </View>
    </View>
  );
};

export default AddDescription;
