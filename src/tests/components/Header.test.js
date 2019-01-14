import React from 'react';
import ReactShallowRenderer from 'react-test-renderer/shallow';
import Header from '../../components/Header';

test('should render Header', () => {
  const renderer = new ReactShallowRenderer();
  renderer.render(<Header />);

  const output = renderer.getRenderOutput();
  expect(output).toMatchSnapshot();

  // console.log(output);
});
