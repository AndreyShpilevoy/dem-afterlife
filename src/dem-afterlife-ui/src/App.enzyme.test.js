import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

it('renders without crashing', () => {
  shallow(<App />);
});

it('snapshot test', () => {
  expect(shallow(<App />)).toMatchSnapshot();
});