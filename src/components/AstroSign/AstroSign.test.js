import React from 'react';
import { AstroSign, mapStateToProps } from './AstroSign';
import { shallow } from 'enzyme';

describe('AstroSign', () => {
    let wrapper;
    

    beforeEach(() => {
        wrapper = shallow(<AstroSign/>)
    });

    it('should match the snapshot', () => {
        expect(wrapper).toMatchSnapshot();
    });

    describe('mapStateToProps', () => {
        it('should return the corresponding portions of state', () => {

        })
    })
})