import React, { useState } from 'react'
import styled from 'styled-components'
import { Input } from '../styles/RegisterStyle'

const PortfolioWrapper = styled.div`
    padding-top: 1.5rem;
    width: 45.2%;
    
    input {
        margin-bottom: 1.5rem;
    }

    div {
        display: flex;
        gap: 2rem;
    }

    div div {
        display: flex;
        align-items: flex-end;
        gap: 0.8rem;
    }

    div div:hover {
        cursor: pointer;
    }

    .addLink div, .removeLink div {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 1.5rem;
        height: 1.5rem;
        border-style: solid;
        border-width: 2px;
        position: relative;
        transition: 0.2s;
    }

    .addLink div {
        color: rgb(0, 0, 150);
    }

    .addLink div div {
        background-color: rgb(0, 0, 150);
    }

    .addLink div:hover {
        color: rgb(0, 0, 255);
    }

    .addLink div div, .removeLink div div {
        width: 0.8rem;
        height: 2px;
        position: absolute;
        border: none;
    }

    .addLink div div:first-child {
        transform: rotate(90deg);
    }

    span {
        transition: 0.2s;
    }

    div span:hover {
        color: rgb(120, 120, 120);
    }

    .removeLink div {
        color: rgb(150, 0, 0);
    }

    .removeLink div div {
        background-color: rgb(150, 0, 0);
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
            <div>
                <div onClick={handleNewLink} className="addLink">
                    <div>
                        <div />
                        <div />
                    </div>
                    <span>Inserir novo link</span>
                </div>
                { links.length > 0 && (
                    <div onClick={handleRemoveLink} className="removeLink">
                        <div>
                            <div />
                        </div>
                        <span>Remover último link</span>
                    </div>
                ) }
            </div>
        </PortfolioWrapper>
    )
}