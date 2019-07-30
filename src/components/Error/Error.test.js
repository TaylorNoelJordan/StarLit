import React from 'react';
import Error from './Error';
import { shallow } from 'enzyme';
import { Link } from 'react-router-dom';

describe('Error', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<Error/>)
    });

    it('should match the snapshot', () => {
        expect(wrapper).toMatchSnapshot();
    });

    it('should have a link to take the user back to home page', () => {
        expect(wrapper.find(Link).props().to).toBe('/')
    })
})