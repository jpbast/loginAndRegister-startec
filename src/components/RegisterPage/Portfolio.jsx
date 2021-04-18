import React, { useState } from 'react'
import styled from 'styled-components'
import { Input } from '../../styles/RegisterStyle'
import AddNewLink from './AddNewLink'
import InputMessage from '../LoginPage/InputMessage'

const PortfolioWrapper = styled.div`
    padding-top: 1.5rem;
    width: 45.2%;
    
    input {
        margin-bottom: 2rem;
    }

    @media screen and (max-width: 700px) {
        width: 100%;
    }
`

export default function Portfolio() {
    const [links, setLinks] = useState([])
    const [github, setGithub] = useState(false)
    const [behance, setBehance] = useState(false)
    const emptyField = 'Campo vazio'
    const githubRE = /https?:\/\/github\.com\/(?:[^\/\s]+\/)/gm
    const behanceRE = /https?:\/\/behance\.net\/(?:[^\/\s]+\/)/gm

    function handleNewLink() {
        setLinks([...links, 'newLink'])
    }

    function handleRemoveLink() {
        const index = links.length
        setLinks(links.filter((link, i) => i !== (index-1)))
    }

    const githubMessage = val => !val ? setGithub(emptyField) : (githubRE.test(val) ? setGithub('') : setGithub('Link de perfil inválido para o GitHub'))
    const behanceMessage = val => !val ? setBehance(emptyField) : (behanceRE.test(val) ? setBehance('') : setBehance('Link de perfil inválido para o Behance'))

    return (
        <PortfolioWrapper>
            <InputMessage onChange={e => githubMessage(e.target.value)} message={github} id="github" placeholder='https://github.com/nome/' type="text">
                GitHub
            </InputMessage>
            <InputMessage onChange={e => behanceMessage(e.target.value)} message={behance} id="behance" placeholder='https://behance.net/nome/' type="text">
                Behance
            </InputMessage>

            { links.map(link => <Input id={link} type='text' placeholder='Novo link' />) }
            <AddNewLink state={links} handleNewLink={handleNewLink} handleRemoveLink={handleRemoveLink}>
                <span>Inserir novo link</span> 
                <span>Remover último link</span> 
            </AddNewLink>
        </PortfolioWrapper>
    )
}