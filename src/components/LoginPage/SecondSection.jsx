import React, { useContext, useState } from 'react'
import styled from 'styled-components'
import { SectionWrapper, ButtonRed, BackButton } from '../../styles/SectionWrapper'
import { LoginSectionContext } from '../../contexts/LoginSectionContext'
import backIcon from '../../assets/images/back-icon.svg'
import InputMessage from './InputMessage'

const PasswordWrapper = styled.div`
    display: flex;
    flex-direction: column;

    div + span:last-child {
        color: rgb(200, 200, 200);
        font-size: 0.9rem;
        align-self: flex-end;
        padding-top: 0.5rem;
        transition: 0.2s;
        cursor: pointer;
    }

    div + span:last-child:hover {
        color: rgb(180, 180, 180);
    }
`

export default function SecondSection() {
    const [section, setSection] = useContext(LoginSectionContext)
    const [password, setPassword] = useState(false)
    const emptyField = 'Campo vazio'

    function handleVoltar() {
        setSection(1)
    }

    const passwordMessage = val => val ? setPassword('') : setPassword(emptyField)

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
                <PasswordWrapper>
                    <InputMessage login message={password} onChange={(e) => passwordMessage(e.target.value)} placeholder="*******" id="password" type="text">
                        Senha
                    </InputMessage>
                    <span>Esqueci minha senha</span>
                </PasswordWrapper>
                <ButtonRed>Entrar</ButtonRed>
            </div>
        </SectionWrapper>
    )
}
