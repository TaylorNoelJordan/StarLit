import React from 'react';
import { HoroscopeDetails, mapStateToProps, mapDispatchToProps }from './HoroscopeDetails'
import { shallow } from 'enzyme';
import { Link } from 'react-router-dom';
import { loadComplete } from '../../actions';

describe('HoroscopeDetails', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<HoroscopeDetails/>);
    });

    it('should match the snapshot', () => {
        expect(wrapper).toMatchSnapshot();
    });

    it('should route to more details with affirmative results', () => {
        expect(wrapper.find(Link).props().to).toBe('/details');
    });

    describe('mapStateToProps', () => {
        it('should return corresponding portions of state', () => {
            const mockState = {
                user: {
                    name: 'Eleven',
                    sign: 'Scorpio',
                    description: 'The demagorgen didn\'t beat you, and neither shall the mind flayer. Keep a clear head tonight... You may be responsible for saving all your friends.',
                    color: 'gray',
                    mood: 'on',
                    date_range: ''
                },
                isLoading: true
            }

            const expected = {
                    name: mockState.user.name,
                    sign: mockState.user.sign,
                    message: mockState.user.description,
                    dateRange: mockState.user.date_range,
                    isLoading: true
            }

            const mappedProps = mapStateToProps(mockState);
            expect(mappedProps).toEqual(expected)
        });
    });

    describe('mapDispatchToProps', () => {
        let mockDispatch;

        beforeEach(() => {
            mockDispatch = jest.fn();
        });

        it('should call dispatch with loadComplete', () => {
            const actionToDispatch = loadComplete({ isLoading: false });

            const mappedProps = mapDispatchToProps(mockDispatch)
            mappedProps.loadComplete({ isLoading: false })

            expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
        })
    })
})