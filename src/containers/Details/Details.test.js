import React from 'react';
import { shallow } from 'enzyme';
import { Link } from 'react-router-dom';
import { Details, mapStateToProps, mapDispatchToProps } from './Details';
import { clearUser } from '../../actions'

describe('Details', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<Details/>)
    });

    it('should match the snapshot', () => {
        expect(wrapper).toMatchSnapshot();
    });

    it('should return the user to the home page on start over btn', () => {
        expect(wrapper.find(Link).props().to).toBe('/')
    });

    describe('mapStateToProps', () => {
        it('should return corresponding portions of state', () => {
            const mockState = {
                user: {
                    lucky_time: '11am',
                    color: 'orange',
                    mood: 'confident',
                    compatibility: 'Pisces'
                }
            }

            const expected = {
                time: mockState.user.lucky_time,
                color: mockState.user.color,
                mood: mockState.user.mood,
                compatibility: mockState.user.compatibility
            }

            const mappedProps = mapStateToProps(mockState);
            expect(mappedProps).toEqual(expected)

        });
    });

    describe('mapDispatchToProps', () => {
        it('should call dispatch with CLEAR_USER', () => {
            const mockDispatch = jest.fn();
            const actionToDispatch = clearUser();

            const mappedProps = mapDispatchToProps(mockDispatch);
            mappedProps.clearUser();

            expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
        })

    })
})