import React from 'react';
import { Provider } from 'react-redux';

import 'moment/locale/es';
import moment from 'moment';

import '../../config/debug';
import store from '../../store';
import Root from '../Root';

moment.locale('es');

const App = () => (
  <Provider store={store}>
    <Root />
  </Provider>
);

export default App;
