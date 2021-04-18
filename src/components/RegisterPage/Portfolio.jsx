import React, { useState } from 'react'
import styled from 'styled-components'
import { Input } from '../../styles/RegisterStyle'
import AddNewLink from './AddNewLink'

const PortfolioWrapper = styled.div`
    padding-top: 1.5rem;
    width: 45.2%;
    
    input {
        margin-bottom: 1.5rem;
    }

    @media screen and (max-width: 700px) {
        width: 100%;
    }
`

export default function Portfolio() {
    const [links, setLinks] = useState([])

    function handleNewLink() {
        setLinks([...links, 'newLink'])
    }

    function handleRemoveLink() {
        const index = links.length
        setLinks(links.filter((link, i) => i !== (index-1)))
    }

    return (
        <PortfolioWrapper>
            <label htmlFor="github">
                GitHub
                <Input id='github' type="text" placeholder='www.github.com/nome' />
            </label>
            <label htmlFor="behance">
                Behance
                <Input id='behance' type="text" placeholder='www.behance.net/nome' />
            </label>
            { links.map(link => <Input id={link} type='text' placeholder='Novo link' />) }
            <AddNewLink state={links} handleNewLink={handleNewLink} handleRemoveLink={handleRemoveLink}>
                <span>Inserir novo link</span> 
                <span>Remover último link</span> 
            </AddNewLink>
        </PortfolioWrapper>
    )
}