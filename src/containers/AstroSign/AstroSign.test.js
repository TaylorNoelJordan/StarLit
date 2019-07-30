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
            const mockState = {
                user : {
                    sign: 'Virgo',
                    date_range: 'Aug 23 - Sep 22'
                }
            }

            const expected = {
                sign: mockState.user.sign,
                dateRange: mockState.user.date_range
            }

            const mappedProps = mapStateToProps(mockState);
            expect(mappedProps).toEqual(expected)

        })
    })
})