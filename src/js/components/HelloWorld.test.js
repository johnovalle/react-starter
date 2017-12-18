import React from 'react';
import expect from 'expect';
import { shallow, mount } from 'enzyme';
import HelloWorld from './HelloWorld';

const wrapper = shallow(<HelloWorld />);

describe('HelloWorld Component', () => {
  it('renders h1', () => {
    expect(wrapper.find('h1').text()).toEqual('Hello World');
  })
  it('renders p', () => {
    expect(wrapper.find('p').text()).toEqual('Welcome to my world');
  })
})
