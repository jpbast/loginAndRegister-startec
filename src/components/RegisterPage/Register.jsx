import React, { useContext } from 'react'
import Header from './Header'
import styled from 'styled-components'
import { RegisterSectionContext } from '../../contexts/RegisterSectionContext'
import Introduction from './Introduction'
import Skills from './Skills'
import RegisterNextButton from './RegisterNextButton'
import Preferences from './Preferences'


const RegisterWrapper = styled.div`
    background-color: rgb(235, 235, 235);
    height: 100vh;
    padding: 1.5rem 8rem 1.5rem 8rem;

    @media screen and (max-width: 800px) {
        padding: 1.5rem 4rem 1.5rem 4rem;
    }

    @media screen and (max-width: 500px) {
        padding: 1.5rem 2.5rem 1.5rem 2.5rem;
    }

    @media screen and (max-width: 350px) {
        padding: 1.5rem 1.5rem 1.5rem 1.5rem;
    }
`

export default function Register() {
    const { section } = useContext(RegisterSectionContext)
    const [registerSection, setRegisterSection] = section

    return (
        <RegisterWrapper>
            <Header />
            { registerSection === 1 && <Introduction /> }
            { registerSection === 2 && <Skills /> }
            { registerSection === 3 && <Preferences /> }
            <RegisterNextButton />
        </RegisterWrapper>
    )
}
