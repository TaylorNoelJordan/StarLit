import React from 'react';
import { shallow } from 'enzyme';
import { HoroscopeForm, mapStateToProps, mapDispatchToProps } from './HoroscopeForm';
import { setUser, hasErrored } from '../../actions';

describe('HoroscopeForm', () => {
    let wrapper;
    let instance;

    beforeEach(() => {
        wrapper = shallow(<HoroscopeForm />)
        instance = wrapper.instance();
    });

    it('should call set state when a name input is detected', () => {
        const mockEvent = { target: { name: 'name', value: 'Sailor Moon'}}
        instance.handleChange = jest.fn()
        wrapper.find('[name="name"]').simulate('change', mockEvent);

        expect(wrapper.state('name')).toEqual('Sailor Moon')

    });

    it.skip('should call set state when an option is selected', () => {
        const mockEvent = { target: { value: 'libra'}};
        instance.handleChange = jest.fn();
        wrapper.find('select option[value="libra"]').simulate('change', mockEvent)

        expect(wrapper.state('sign')).toEqual('libra')
    });


    it('should set an error in state if checkInputs fails', () => {
        instance.checkInputs();

        expect(wrapper.state('error')).toEqual('This input is required')
    });

    it('should call handleSubmit when submit button is clicked', () => {
        const mockEvent = {preventDefault: jest.fn()}
        instance.handleSubmit = jest.fn();

        wrapper.find('.horoscope-form-submit').simulate('click', mockEvent);
        expect(instance.handleSubmit).toHaveBeenCalledWith(mockEvent)
    });

    describe('mapStateToProps', () => {
        it('should return the object of the current user', () => {
            const mockState = {
                user : {
                    name: 'Taylor',
                    sign: 'aries',
                    description: 'Time to reveal that project you\'ve been working on! Dig your fave outfit out of your closet and get ready to show off.',
                    lucky_time: '7pm',
                    color: 'turquoise',
                    mood: 'excited',
                    compatibility: 'Libra',
                    lucky_number: '13',
                    date_range: 'Mar 22 - Apr 19'
                }
            }

            const expected = {
                user : {
                    name: 'Taylor',
                    sign: 'aries',
                    description: 'Time to reveal that project you\'ve been working on! Dig your fave outfit out of your closet and get ready to show off.',
                    lucky_time: '7pm',
                    color: 'turquoise',
                    mood: 'excited',
                    compatibility: 'Libra',
                    lucky_number: '13',
                    date_range: 'Mar 22 - Apr 19'
                }
            }

            const mappedProps = mapStateToProps(mockState);

            expect(mappedProps).toEqual(expected)
        });

        it('should return an the error object', () => {
            const mockState = {
                user : {
                    name: 'Taylor',
                    sign: 'aries',
                    description: 'Time to reveal that project you\'ve been working on! Dig your fave outfit out of your closet and get ready to show off.',
                    lucky_time: '7pm',
                    color: 'turquoise',
                    mood: 'excited',
                    compatibility: 'Libra',
                    lucky_number: '13',
                    date_range: 'Mar 22 - Apr 19'
                },
                error: ''
            };
            const expected = {
                user : {
                    name: 'Taylor',
                    sign: 'aries',
                    description: 'Time to reveal that project you\'ve been working on! Dig your fave outfit out of your closet and get ready to show off.',
                    lucky_time: '7pm',
                    color: 'turquoise',
                    mood: 'excited',
                    compatibility: 'Libra',
                    lucky_number: '13',
                    date_range: 'Mar 22 - Apr 19'
                },
                error: ''
            };

            const mappedProps = mapStateToProps(mockState);

            expect(mappedProps).toEqual(expected)
        })
    });

    describe('mapDispatchToProps', () => {
        let mockDispatch;

        beforeEach(() => {
            mockDispatch = jest.fn()
        });
        it('should call dispatch with setUser', () => {
            const actionToDispatch = setUser({
                name: 'Taylor',
                sign: 'aries',
                description: 'Time to reveal that project you\'ve been working on! Dig your fave outfit out of your closet and get ready to show off.',
                lucky_time: '7pm',
                color: 'turquoise',
                mood: 'excited',
                compatibility: 'Libra',
                lucky_number: '13',
                date_range: 'Mar 22 - Apr 19'
            });

            const mappedProps = mapDispatchToProps(mockDispatch);
            mappedProps.setUser({
                name: 'Taylor',
                sign: 'aries',
                description: 'Time to reveal that project you\'ve been working on! Dig your fave outfit out of your closet and get ready to show off.',
                lucky_time: '7pm',
                color: 'turquoise',
                mood: 'excited',
                compatibility: 'Libra',
                lucky_number: '13',
                date_range: 'Mar 22 - Apr 19'
            });

            expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
        });

        it('should call dispatch with hasErrored', () => {
            const actionToDispatch = hasErrored('error fetching your reults');
            
            const mappedProps = mapDispatchToProps(mockDispatch);
            mappedProps.hasErrored('error fetching your results');

            expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
        })

    })

})