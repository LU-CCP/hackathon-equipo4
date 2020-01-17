import React, { useRef, useCallback, useState } from 'react';
import VoiceToText, { EVENTS } from 'react-native-voice-oop';
import { View, Text, TouchableWithoutFeedback } from 'react-native';
import LottieView from 'lottie-react-native';
import { TextInput, Button } from 'react-native-paper';

import { useEventListener, useUnmount } from '../../hooks';

import styles from './styles';

const AddDescription = ({ onChange }) => {
  const voiceRef = useRef(new VoiceToText());
  const [text, setText] = useState('');
  const [disableInput, setDisableInput] = useState(true);
  const micRef = useRef();

  const handlePress = useCallback(async () => {
    if (!(await VoiceToText.isRecognizing())) {
      micRef.current.play();
      voiceRef.current.start();
    }
  }, []);

  const handleRecord = useCallback(
    ({ value }) => {
      setText(value[0]);
      onChange(value[0]);
      micRef.current.reset();
    },
    [onChange]
  );

  useUnmount(() => {
    voiceRef.current.destroy();
    voiceRef.current = null;
  });

  useEventListener(EVENTS.results, handleRecord, voiceRef.current);

  const textInputhandler = value => {
    setText(value);
    onChange(value);
  };

  const handleModifyInput = () => {
    setDisableInput(false);
  };

  return (
    <View style={styles.container}>
      <Text
        style={{
          fontSize: 30,
          fontWeight: 'bold',
          marginBottom: 30,
          textAlign: 'center',
          marginTop: 30
        }}
      >
        Dime tu descripción
      </Text>
      <View style={styles.container2}>
        <View style={styles.container3}>
          <TouchableWithoutFeedback onPress={handlePress}>
            <LottieView
              source={require('../../resources/animations/2887-listen-state.json')}
              loop
              ref={micRef}
            />
          </TouchableWithoutFeedback>
        </View>
      </View>
      <View style={styles.container4}>
        <TextInput
          value={text}
          onChangeText={textInputhandler}
          disabled={disableInput}
          label='Descripción'
        />
      </View>
      <View style={styles.boton2}>
        <Button style={styles.boton} mode='contained'>
          Grabar nuevamente
        </Button>
        <Button
          style={styles.boton}
          mode='contained'
          onPress={handleModifyInput}
        >
          Modificar texto
        </Button>
      </View>
    </View>
  );
};

export default AddDescription;
