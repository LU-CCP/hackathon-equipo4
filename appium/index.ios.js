import e2e from './index.test';

global.__ANDROID__ = false;
global.__IOS__ = true;

const capabilities = {
  app:
    './ios/build/createReactNativeAppReduxSagaClassic/Build/Products/Debug-iphonesimulator/createReactNativeAppReduxSagaClassic.app',
  automationName: 'XCUITest',
  deviceName: 'iPhone 11',
  newCommandTimeout: 120,
  noReset: true,
  platformName: 'iOS',
  platformVersion: '13.2'
};

e2e(capabilities);
