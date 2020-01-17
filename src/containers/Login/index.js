import React, { useCallback, useRef } from 'react';
import TouchID from 'react-native-touch-id';
import {
  Text,
  TouchableHighlight,
  View,
  Alert,
  TouchableWithoutFeedback
} from 'react-native';
import LottieView from 'lottie-react-native';

import { HOURS_SCREEN } from '../../navigation/screens';

const Login = ({ navigation }) => {
  const touchRef = useRef();

  const optionalConfigObject = {
    title: 'Authentication Required', // Android
    imageColor: '#e00606', // Androidv

    imageErrorColor: '#ff0000', // Android
    sensorDescription: 'Touch sensor', // Android
    sensorErrorDescription: 'Failed', // Android
    cancelText: 'Cancel', // Android
    // fallbackLabel: 'Show Passcode', // iOS (if empty, then label is hidden)
    unifiedErrors: false // use unified error messages (default false)
    // passcodeFallback: false // iOS - allows the device to fall back to using the passcode, if faceid/touch is not available. this does not mean that if touchid/faceid fails the first few times it will revert to passcode, rather that if the former are not enrolled, then it will use the passcode.
  };
  const handleNavigate = useCallback(() => navigation.navigate(HOURS_SCREEN), [
    navigation
  ]);
  const handlerTouchID = useCallback(async () => {
    try {
      //   touchRef.current.play();
      await TouchID.authenticate(
        'to demo this react-native component',
        optionalConfigObject
      );
      handleNavigate();
    } catch (error) {
      Alert.alert('Authentication Failed');
    }
  }, [handleNavigate, optionalConfigObject]);

  return (
    <View>
      <Text>Login</Text>
      <View
        style={{
          marginTop: 190,
          alignContent: 'center',
          justifyContent: 'center',
          height: 400
        }}
      >
        <TouchableWithoutFeedback onPress={handlerTouchID}>
          <LottieView
            source={require('../../resources/animations/663-fingerprint-scan.json')}
            loop
            ref={touchRef}
          />
        </TouchableWithoutFeedback>
      </View>
    </View>
  );
};

export default Login;
