import React from 'react';
import { HoroscopeDetails, mapStateToProps, mapDispatchToProps }from './HoroscopeDetails'
import { shallow } from 'enzyme';
import { Link } from 'react-router-dom';
import { clearUser } from '../../actions';

describe('HoroscopeDetails', () => {
    let wrapper;
    let mockProps;

    beforeEach(() => {
        mockProps = {
            user: {
                name: 'Eleven',
                sign: 'Scorpio',
                description: 'The demagorgen didn\'t beat you, and neither shall the mind flayer. Keep a clear head tonight... You may be responsible for saving all your friends.',
                color: 'gray',
                mood: 'on',
                date_range: ''
            },
            verdict: '',
            name: 'Eleven',
            message: 'The demagorgen didn\'t beat you, and neither shall the mind flayer. Keep a clear head tonight... You may be responsible for saving all your friends.',
            verdict: 'negative'
        }
        wrapper = shallow(<HoroscopeDetails props={mockProps}/>);
    });

    it('should match the snapshot', () => {
        expect(wrapper).toMatchSnapshot();
    });

    it('should route to more details with affirmative results', () => {
        expect(wrapper.find(Link).props().to).toBe('/');
        // expect(wrapper.find(Link).props().to).toBe('/details');

    });

    describe('mapStateToProps', () => {
        it('should return corresponding portions of state', () => {
        
            const mockState = {
                user : {
                    name: 'Eleven',
                    sign: 'Scorpio',
                    description: 'The demagorgen didn\'t beat you, and neither shall the mind flayer. Keep a clear head tonight... You may be responsible for saving all your friends.'
                },
                verdict: 'negative'
    
            }

            const expected = {
                user: mockState.user,
                name: mockState.user.name,
                message: mockState.user.description,
                verdict: mockState.verdict
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

        it('should call dispatch with clearUser', () => {
            const actionToDispatch = clearUser();

            const mappedProps = mapDispatchToProps(mockDispatch)
            mappedProps.clearUser()

            expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
        })
    })
})