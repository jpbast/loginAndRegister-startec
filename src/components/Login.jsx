import React from 'react'
import Navbar from './Navbar'
import LeftSection from './LeftSection'
import RightSection from './RightSection'
import styled from 'styled-components'
import { LoginSectionProvider } from '../contexts/LoginSectionContext'

const ContainerSection = styled.div`
    display: grid;
    grid-template-columns: 1.5fr 1fr;
    height: 95%;
    background-color: rgb(0, 0, 57);

    @media screen and (max-width: 600px) {
        grid-template-columns: none;
        grid-template-rows: 1fr 2fr;
    }
`

const LoginWrapper = styled.div`
    height: 100vh;
    background-color: rgb(0, 0, 57);
`

export default function Login() {
    return (
        <LoginWrapper>
            <Navbar />
            <LoginSectionProvider>
                <ContainerSection>
                    <LeftSection />
                    <RightSection />
                </ContainerSection>
            </LoginSectionProvider>
        </LoginWrapper>
    )
}