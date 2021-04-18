import React from 'react'
import styled from 'styled-components'
import Select from './Select'

const AreasWrapper = styled.div`
    width: 70%;
    padding-top: 2rem;
    display: grid;
    grid-template-columns: 1fr 0.5fr;
    grid-gap: 4rem;
    padding-bottom: 2rem;

    @media screen and (max-width: 1350px) {
        width: 95%;
        grid-template-columns: 1fr 0.7fr;
    }

    @media screen and (max-width: 800px) {
        column-gap: 3rem;
    }

    @media screen and (max-width: 700px) {
        width: 100%;
        column-gap: 2rem;
        grid-template-columns: 1fr 1fr;
    }

    @media screen and (max-width: 500px) {
        grid-template: 1fr 1fr / none;
        row-gap: 2rem;
    }
`

export default function AreasOfInterests() {
    return (
        <AreasWrapper>
            <Select id="area" options={['', 'Administração', 'Engenharia', 'Tecnologia']} selected={0} disabled hidden>
                Área de atuação*
            </Select>
            <Select id="area" options={['1-2 anos', '2-3 anos', '3 anos mou mais']} selected={0}>
                Tempo de experiência na área*
            </Select>
        </AreasWrapper>
    )
}
