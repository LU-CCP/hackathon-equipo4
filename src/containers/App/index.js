import React from 'react';
import { Provider } from 'react-redux';

import '../../config/debug';
import store from '../../store';
import Root from '../Root';

const AddDescription = () => (
  <Provider store={store}>
    <Root />
  </Provider>
);

export default AddDescription;
