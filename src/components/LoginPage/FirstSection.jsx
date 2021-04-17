import React, { useContext } from 'react'
import styled from 'styled-components'
import { SectionWrapper, ButtonRed } from '../../styles/SectionWrapper'
import linkedinLogo from '../../assets/images/linkedin-logo.svg'
import googleLogo from '../../assets/images/google-logo.png'
import { LoginSectionContext } from '../../contexts/LoginSectionContext'

const LineSeparator = styled.div`
    width: 100%;
    height: 2px;
    background-color: gray;
`

const ButtonGoogle = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    padding: 0.9rem;
    background-color: white;
    transition: 0.2s;

    &:hover {
        background-color: rgb(200, 200, 200);
    }
`

const ButtonLinkedin = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    padding: 0.9rem;
    background-color: blue;
    color: white;
    transition: 0.2s;

    &:hover {
        background-color: rgb(0, 0, 200);
    }
`

export default function FirstSection() {
    const [section, setSection] = useContext(LoginSectionContext)

    function handleAvancar() {
        const email = document.getElementById('email').value
        if (email === 'admin')
            setSection(3)
        else
            setSection(2)
    }   

    return (
        <SectionWrapper>
            <span className="title">Junte-se a nós</span>
            <div> 
                <label htmlFor="email">
                    <span>E-mail</span>
                    <input id="email" type="text" placeholder="contato@gmail.com"/>
                </label>
                <ButtonRed onClick={handleAvancar}>Avançar</ButtonRed>
                <LineSeparator />
                <ButtonLinkedin>
                    <img style={{backgroundColor: 'white', borderRadius: '5px'}} width="30px" src={linkedinLogo} alt="Linkedin Logo"/>
                    ENTRAR COM LINKEDIN
                </ButtonLinkedin>
                <ButtonGoogle>
                    <img width="30px" src={googleLogo} alt="Linkedin Logo"/>
                    ENTRAR COM GOOGLE
                </ButtonGoogle>
            </div>
        </SectionWrapper>
    )
}