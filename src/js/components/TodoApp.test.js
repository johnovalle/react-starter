import React from 'react';
import expect from 'expect';
import { shallow, mount } from 'enzyme';
import TodoApp from './TodoApp';

const wrapper = mount(<TodoApp />);

describe('TodoApp Component', () => {
    it('renders h1', () => {
        expect(wrapper.find('h1').text()).toEqual('to-do (0)');
    });
})