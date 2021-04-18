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

    .back {
        background-color: rgb(235, 235, 235);
        color: rgb(0, 0, 60);
    }

    .back:hover {
        color: rgb(0, 0, 150);
    }

    .next {
        background-color: rgb(0, 0, 60);
        color: rgb(235, 235, 235);
    }

    .next:hover {
        background-color: rgb(0, 0, 150);
    }

    @media screen and (max-width: 700px) {
        width: 100%;
    }
`

export default function RegisterNextButton() {
    const { section } = useContext(RegisterSectionContext)
    const [registerSection, setRegisterSection] = section

    function handleBack() {
        setRegisterSection(registerSection-1)
    }

    function handleContinue() {
        if (registerSection !== 3)
            setRegisterSection(registerSection+1)
    }

    return (
        <NextButtonWrapper>
            { registerSection > 1 && (
                <button className="back" onClick={handleBack}>Voltar</button>
            ) }
            <button className="next" onClick={handleContinue}>CONTINUAR</button>
        </NextButtonWrapper>
    )
}
