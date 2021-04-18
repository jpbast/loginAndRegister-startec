import React, { useState } from 'react'
import { Input } from '../../styles/RegisterStyle'
import Select from './Select'
import styled from 'styled-components'
import AddNewLink from './AddNewLink'

const LanguageWrapper = styled.div`
    width: 43.6%;
    /* padding-top: 4rem; */
    
    label + span {
        margin-top: 0.6rem;
        margin-bottom: 1.5rem;
    }

    input {
        margin-bottom: 1.5rem;
    }

    @media screen and (max-width: 700px) {
        width: 100%;
    }
`

export default function Language() {
    const [languages, setLanguages] = useState([])

    function handleNewLink() {
        setLanguages([...languages, 'newLink'])
    }

    function handleRemoveLink() {
        const index = languages.length
        setLanguages(languages.filter((language, i) => i !== (index-1)))
    }

    return (
        <LanguageWrapper>
            <Select id="ingles" options={['Basico', 'Intermediário', 'Avançado', 'Fluente']} selected={0}>
                Nível de Inglês*
            </Select>
            <span style={{fontSize: '0.8rem', display: 'block'}}>obs: podem ocorrer entrevistas somente em inglês</span>    
            { languages.map(language => <Input id={language} type='text' placeholder='Novo idioma' />) }
            <AddNewLink state={languages} handleNewLink={handleNewLink} handleRemoveLink={handleRemoveLink}>
                <span>Inserir outro idioma</span>
                <span>Remover último idioma</span>
            </AddNewLink>
        </LanguageWrapper>
    )
}
