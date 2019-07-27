import React from 'react';
import { shallow } from 'enzyme';
import { HoroscopeForm, mapStateToProps, mapDispatchToProps } from './HoroscopeForm';

describe('HoroscopeForm', () => {
    let wrapper;
    let instance;

    beforeEach(() => {
        wrapper = shallow(<HoroscopeForm />)
        instance = wrapper.instance();
    });

    it('should call handleChange when an input is detected', () => {
        const mockEvent = { target: { name: 'name', value: 'Sailor Moon'}}
        instance.handleChange = jest.fn()
        wrapper.find('[name="name"]').simulate('change', mockEvent);

        expect(wrapper.state('name')).toEqual('Sailor Moon')

    });

    it('should call handleChange when an option is selected', () => {
        const mockEvent = { target: {name: 'sign', value: 'Libra'}};
        instance.handleChange = jest.fn();
        wrapper.find('[name="sign"]').simulate('click', mockEvent)

        expect(wrapper.state('sign')).toEqual('Libra')
    });

    it('should set state when handleChange is called', () => {

    });

    it('should set an error in state if checkInputs fails', () => {

    });

    it('should call handleSubmit when submit button is clicked', () => {

    });

})