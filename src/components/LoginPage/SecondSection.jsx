import React, { useContext } from 'react'
import styled from 'styled-components'
import { SectionWrapper, ButtonRed, BackButton } from '../../styles/SectionWrapper'
import { LoginSectionContext } from '../../contexts/LoginSectionContext'
import backIcon from '../../assets/images/back-icon.svg'

const LabelWrapper = styled.label`
    & span:last-child {
        color: rgb(200, 200, 200);
        font-size: 0.9rem;
        align-self: flex-end;
        padding-top: 0.5rem;
        transition: 0.2s;
        cursor: pointer;
    }

    & span:last-child:hover {
        color: rgb(180, 180, 180);
    }
`

export default function SecondSection() {
    const [section, setSection] = useContext(LoginSectionContext)

    function handleVoltar() {
        setSection(1)
    }

    return (
        <SectionWrapper>
            <BackButton>
                <div onClick={handleVoltar}>
                    <img src={backIcon} alt="Back Icon"/>
                    <span>VOLTAR</span>
                </div>
                <span className="title">Olá, João</span>
            </BackButton>
            <div> 
                <LabelWrapper htmlFor="email">
                    <span>Senha</span>
                    <input id="email" type="text" placeholder="******"/>
                    <span>Esqueci minha senha</span>
                </LabelWrapper>
                <ButtonRed>Entrar</ButtonRed>
            </div>
        </SectionWrapper>
    )
}
