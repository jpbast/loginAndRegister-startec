import styled from 'styled-components'
import arrowDown from '../assets/images/arrow-down-icon.svg'

export const Title = styled.span`
    color: rgb(0, 0, 60);
    font-size: 1.3rem;
    font-family: inherit;
    font-weight: 900;
`

export const Input = styled.input`
    width: 100%;
    background-color: white;
    padding: 0.9rem;
`

export const Select = styled.select`
    width: 100%;
    background-image: url(${arrowDown});
    background-repeat: no-repeat;
    background-size: 1.1rem;
    background-position-x: calc(100% - 1rem);
    background-position-y: 50%;
    background-color: white;
    padding: 0.9rem;
`