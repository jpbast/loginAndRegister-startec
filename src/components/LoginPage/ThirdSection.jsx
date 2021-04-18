import React, { useContext, useState } from 'react'
import { SectionWrapper, ButtonRed, BackButton } from '../../styles/SectionWrapper'
import backIcon from '../../assets/images/back-icon.svg'
import { LoginSectionContext } from '../../contexts/LoginSectionContext'
import { Link } from 'react-router-dom'
import InputMessage from './InputMessage'

export default function ThirdSection() {
    const [section, setSection] = useContext(LoginSectionContext)
    const [name, setName] = useState(false)
    const [password, setPassword] = useState(false)
    const [confirmPassword, setConfirmPassword] = useState(false)
    const emptyField = 'Campo vazio'
    const nameRE = /[A-Z][a-z]+(\s|,)[A-Z][a-z]{1,19}/

    function handleVoltar() {
        setSection(1)
    }

    const nameMessage = val => !val ? setName(emptyField) : (nameRE.test(val) ? setName('') : setName('Insira nome e sobrenome'))
    const passwordMessage = val => val ? setPassword('') : setPassword(emptyField)
    const confirmPasswordMessage = val => val ? setConfirmPassword('') : setConfirmPassword(emptyField)


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
                <InputMessage login message={name} onChange={(e) => nameMessage(e.target.value)} id="nome" type="text">
                    Nome completo
                </InputMessage>
                <InputMessage login message={password} onChange={(e) => passwordMessage(e.target.value)} placeholder="*******" id="password" type="text">
                    Senha
                </InputMessage>
                <InputMessage login message={confirmPassword} onChange={(e) => confirmPasswordMessage(e.target.value)} placeholder="*******" id="confirmPassword" type="text">
                    Confirme sua senha
                </InputMessage>
                {/* <label htmlFor="email">
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
                </label> */}
                <Link to="/register">
                    <ButtonRed style={{width: '100%'}}>Entrar</ButtonRed>
                </Link>
            </div>
        </SectionWrapper>
    )
}
