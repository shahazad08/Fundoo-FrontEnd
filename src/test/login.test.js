import React from 'react';
import {
  shallow
} from 'enzyme';
import LoginComponent from '../components/login_component';
import '../testSetup'

describe('Login Component', () => {
 
  it('should render without throwing an error', () => {
    expect(shallow( < LoginComponent / > ).exists()).toBe(true)
  })

  it('renders a email input', () => {
    expect(shallow( < LoginComponent / > ).find('#email').length).toEqual(1)
  })
  it('renders a password input', () => {
    expect(shallow( < LoginComponent / > ).find('#password').length).toEqual(1)
  })
  /**
   * within the Login components describe function
   **/
  describe('email input', () => {
    it('should respond to change event and change the state of the Login Component', () => {
      const wrapper = shallow( < LoginComponent / > );
      wrapper.find('#email').simulate('change', {
        target: {
          name: 'email',
          value: 'abhisharma@gmail.com'
        }
      });
      expect(wrapper.state('email')).toEqual('abhisharma@gmail.com');
    })
  })
  describe('password input', () => {
    it('should respond to change event and change the state of the Login Component', () => {
      const wrapper = shallow( < LoginComponent / > );
      wrapper.find('#password')
        .simulate('change', {
          target: {
            name: 'password',
            value: '1234567'
          }
        });
      expect(wrapper.state('password')).toEqual('1234567');
    })
  })
})