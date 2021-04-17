import React from 'react'
import styled from 'styled-components'
import uploadIcon from '../../assets/images/upload-icon.svg'

const ResumeWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding-top: 2rem;
    padding-bottom: 2rem;
    cursor: pointer;

    img {
        width: 1.2rem;
    }

    span {
        transition: 0.2s;
    }

    span:hover {
        color: rgb(120, 120, 120)
    }
`

export default function Resume() {
    return (
        <ResumeWrapper>
            <img src={uploadIcon} alt="Upload Icon"/>
            <span>Enviar currículo</span> 
        </ResumeWrapper>
    )
}
