import React from 'react';

import { renderProviderWrapper } from '../__utils__/render';
import { Example } from '../../components/index';

test('should render a component', () => {
  const { container } = renderProviderWrapper(
    <Example text='text' fetching={false} onFetchText={jest.fn()} />
  );

  expect(container).toMatchSnapshot();
});
