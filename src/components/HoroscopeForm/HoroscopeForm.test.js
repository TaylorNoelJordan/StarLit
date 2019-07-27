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

        expect(wrapper.state('sign')).toEqual('Libra')
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

})