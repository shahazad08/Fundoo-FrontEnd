import React from "react";
import { shallow } from 'enzyme';
import {Register} from "../components/register"
import "../testSetup"

describe('Registeration Component',()=>{
    it('should render without throwing an error',()=>{
        expect(shallow(<Register/>)
        .exists())
        .toBe(true)
        
    })

    it('renders a firstName',()=>{
        expect(shallow(<Register/>).find('#firstName').length)
        .toEqual(1)
    })
    it('renders a lastName',()=>{
        expect(shallow(<Register/>).find('#lastName').length)
        .toEqual(1)
    })
    it('renders a email',()=>{
        expect(shallow(<Register/>).find('#email').length)
        .toEqual(1)
    })
    it('renders a service',()=>{
        expect(shallow(<Register/>).find('#service').length)
        .toEqual(1)
    })
    it('renders a password',()=>{
        expect(shallow(<Register/>).find('#password').length)
        .toEqual(1)
    })
    it('renders a confirmPassword',()=>{
        expect(shallow(<Register/>).find('#confirmPassword').length)
        .toEqual(1)
    })


    describe('firstName input', () => {
        it('should respond to change event and change the state of the Registration Component', () => {
            const wrapper = shallow( < Register / > );
            wrapper.find('#firstName').simulate('change', {
                target: {
                    name: 'firstName',
                    value: 'Shahazad'
                }
            });
            expect(wrapper.state('firstName')).toEqual('shazzy');
        })
})
    describe('lastName input', () => {
        it('should respond to change event and change the state of the Registration Component', () => {
            const wrapper = shallow( < Register / > );
            wrapper.find('#lastName').simulate('change', {
                target: {
                    name: 'lastName',
                    value: 'Shaikh'
                }
            });
            expect(wrapper.state('lastName')).toEqual('shaa');
        })
})

    describe('email input', () => {
        it('should respond to change event and change the state of the Registration Component', () => {
            const wrapper = shallow( < Register / > );
            wrapper.find('#email').simulate('change', {
                target: {
                    name: 'email',
                    value: 'sk.shahazad@gmail.com'
                }
            });
            expect(wrapper.state('email')).toEqual('sk.shahazad@gmail.com');
        })
})


describe('service input', () => {
        it('should respond to change event and change the state of the Registration Component', () => {
            const wrapper = shallow( < Register / > );
            wrapper.find('#service').simulate('change', {
                target: {
                    name: 'service',
                    value: 'basic'
                }
            });
            expect(wrapper.state('service')).toEqual('basic');
        })
})

describe('password input', () => {
        it('should respond to change event and change the state of the Registration Component', () => {
            const wrapper = shallow( < Register / > );
            wrapper.find('#password').simulate('change', {
                target: {
                    name: 'password',
                    value: '1234567'
                }
            });
            expect(wrapper.state('password')).toEqual('1234567');
        })
})

describe('confirmPassword input', () => {
        it('should respond to change event and change the state of the Registration Component', () => {
            const wrapper = shallow( < Register / > );
            wrapper.find('#confirmPassword').simulate('change', {
                target: {
                    name: 'confirmPassword',
                    value: '1234567'
                }
            });
            expect(wrapper.state('confirmPassword')).toEqual('1234567');
        })
})



});
