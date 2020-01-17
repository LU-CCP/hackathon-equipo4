import React from 'react';
import LottieView from 'lottie-react-native';

const CheckSend = () => (
  <LottieView
    source={require('../../resources/animations/1175-email.json')}
    autoPlay
    style={{ height: 300 }}
  />
);

export default CheckSend;
