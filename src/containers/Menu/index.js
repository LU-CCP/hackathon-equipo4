import React, { useCallback } from 'react';
import { View, Button } from 'react-native';
import LottieView from 'lottie-react-native';

import { EXAMPLE_SCREEN } from '../../navigation/screens';

const Menu = () => {
  const handleNavigateMsg = useCallback(
    () => NavigationPreloadManager.navigate(EXAMPLE_SCREEN),
    []
  );

  return (
    <View>
      <Button tittle='MSG' onPress={handleNavigateMsg} />
      <LottieView
        // source={require('../../resources/animations/2887-listen-state.json')}
        autoPlay
        loop
      />
    </View>
  );
};

export default Menu;
