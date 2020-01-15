import React from 'react';

import { navigation, renderStoreProviderWrapper } from '../__utils__/render';
import { Example } from '../../containers';

test('should render a container', () => {
  const { container } = renderStoreProviderWrapper(
    <Example navigation={navigation} />
  );

  expect(container).toMatchSnapshot();
});
