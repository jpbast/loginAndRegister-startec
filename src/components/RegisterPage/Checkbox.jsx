import React from 'react'
import styled from 'styled-components'

const CheckboxWrapper = styled.label`
    cursor: pointer;

    input[type=checkbox] {
        transform: scale(1.5);
        margin-right: 0.8rem;
        cursor: pointer;
    }
`

export default function Checkbox(props) {
    return (
        <CheckboxWrapper htmlFor={props.id ? props.id : props.children}>
            <input onClick={props.onClick} id={props.id ? props.id : props.children} type="checkbox"/>
            { props.children }       
        </CheckboxWrapper>
    )
}
