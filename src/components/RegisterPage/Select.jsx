import React from 'react'
import styled from 'styled-components'
import arrowDown from '../../assets/images/arrow-down-icon.svg'

const SelectWrapper = styled.select`
    width: 100%;
    background-image: url(${arrowDown});
    background-repeat: no-repeat;
    background-size: 1.1rem;
    background-position-x: calc(100% - 1rem);
    background-position-y: 50%;
    background-color: white;
    padding: 0.9rem;
`

export default function Select(props) {
    return (
        // Check if children exists. If true, add a label for the select
        props.children ? (
            <label style={props.style} htmlFor={props.id}>
                { props.children }
                <SelectWrapper onChange={props.onChange} id={props.id}>
                    { props.options.map((option, i) => <option 
                        selected={i === props.selected ? true : false} 
                        disabled={i === props.selected && props.disabled ? true : false}  
                        hidden={i === props.selected && props.hidden ? true : false}  
                        value={option.id ? option.id : option}
                    >
                        {option.nome ? option.nome : option }
                    </option>) }
                </SelectWrapper>
            </label>
        ) :
        (
            <SelectWrapper onChange={props.onChange} id={props.id}>
                { props.options.map((option, i) => <option 
                    selected={i === props.selected ? true : false} 
                    disabled={i === props.selected && props.disabled ? true : false}  
                    hidden={i === props.selected && props.hidden ? true : false}  
                    value={option.id ? option.id : option}
                >
                    {option.nome ? option.nome : option }
                </option>) }
            </SelectWrapper> 
        )
    )
}