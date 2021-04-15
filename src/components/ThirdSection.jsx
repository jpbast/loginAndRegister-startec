import React, { useContext } from 'react'
import { SectionWrapper, ButtonRed, BackButton } from '../styles/SectionWrapper'
import backIcon from '../assets/images/back-icon.svg'
import { LoginSectionContext } from '../contexts/LoginSectionContext'

export default function ThirdSection() {
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
                <span className="title">Vamos começar</span>
            </BackButton>
            <div> 
                <label htmlFor="email">
                    <span>Nome completo</span>
                    <input id="email" type="text" placeholder="******"/>
                </label>
                <label htmlFor="email">
                    <span>Senha</span>
                    <input id="email" type="text" placeholder="******"/>
                </label>
                <label htmlFor="email">
                    <span>Confirme sua senha</span>
                    <input id="email" type="text" placeholder="******"/>
                </label>
                <ButtonRed>Entrar</ButtonRed>
            </div>
        </SectionWrapper>
    )
}
