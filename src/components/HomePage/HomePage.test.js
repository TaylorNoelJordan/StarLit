import React from 'react';
import HomePage from './HomePage';
import { shallow } from 'enzyme';
import { Link } from 'react-router-dom';

describe('HomePage', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<HomePage />);
    });

    it('should match the snapshot', () => {
        expect(wrapper).toMatchSnapshot();
    });

    it('should route to the form via the Enter button', () => {
        expect(wrapper.find(Link).props().to).toBe('/info')
    });
})