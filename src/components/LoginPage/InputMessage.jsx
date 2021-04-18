import React from 'react'
import styled from 'styled-components'
import { Input } from '../../styles/RegisterStyle'

const InputWrapper = styled.div`
    position: relative;

    span {
        font-size: 0.9rem;
        color: red;
        font-style: italic;
        position: absolute;
        left: 0;
        top: ${props => props.login ? '4.85rem' : '4.2rem'};
    }
    .input-shadow {
        box-shadow: ${props => !props.message ? '0 0 1px 1px rgb(0, 255, 90)' : '0 0 1px 1px rgb(255, 0, 90)'}
    }

    .input-shadow-login {
        box-shadow: ${props => !props.message ? '0 0 3px 3px rgb(0, 255, 90)' : '0 0 3px 3px rgb(255, 0, 90)'}
    }

`

export default function InputMessage(props) {
    return (
        <InputWrapper login={props.login} message={props.message}>
            <label htmlFor={props.id}>
                { props.children }
                <Input 
                    className={props.message === false ? '' : (props.login ? 'input-shadow-login' : 'input-shadow')}
                    onChange={props.onChange} 
                    type={props.type} 
                    placeholder={props.placeholder} 
                    id={props.id}
                />  
            </label>
            <span>{props.message}</span>
        </InputWrapper>
    )
}
