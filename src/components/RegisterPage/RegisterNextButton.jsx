import React, { useContext } from 'react'
import styled from 'styled-components'
import { RegisterSectionContext } from '../../contexts/RegisterSectionContext'

const NextButtonWrapper = styled.button`
    background-color: rgb(235, 235, 235);
    width: 95%;
    display: flex;
    justify-content: flex-end;
    padding-top: 2rem;
    padding-bottom: 1.5rem;
    gap: 0.5rem;
    cursor: default;

    button {
        padding: 1rem;
        transition: 0.2s;
    }

    button:first-child {
        background-color: rgb(235, 235, 235);
        color: rgb(0, 0, 60);
    }

    button:first-child:hover {
        color: rgb(0, 0, 150);
    }

    button:last-child {
        background-color: rgb(0, 0, 60);
        color: rgb(235, 235, 235);
    }

    button:last-child:hover {
        background-color: rgb(0, 0, 150);
    }

    @media screen and (max-width: 700px) {
        width: 100%;
    }
`

export default function RegisterNextButton() {
    const [registerSection, setRegisterSection] = useContext(RegisterSectionContext)

    function handleBack() {
        setRegisterSection(registerSection-1)
    }

    function handleContinue() {
        setRegisterSection(registerSection+1)
    }

    return (
        <NextButtonWrapper>
            { registerSection > 1 && (
                <button onClick={handleBack}>Voltar</button>
            ) }
            <button onClick={handleContinue}>CONTINUAR</button>
        </NextButtonWrapper>
    )
}
