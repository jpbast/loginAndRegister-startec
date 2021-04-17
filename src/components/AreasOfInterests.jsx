import React from 'react'
import styled from 'styled-components'
import { Select } from '../styles/RegisterStyle'

const AreasWrapper = styled.div`
    width: 70%;
    padding-top: 3rem;
    display: grid;
    grid-template-columns: 1fr 0.5fr;
    grid-gap: 4rem;


    @media screen and (max-width: 800px) {
        column-gap: 3rem;
    }

    @media screen and (max-width: 700px) {
        width: 100%;
    }

    @media screen and (max-width: 500px) {
        grid-template: 1fr 1fr / none;
    }
`

export default function AreasOfInterests() {
    return (
        <AreasWrapper>
            <label htmlFor="area">
                Área de atuação*
                <Select name="area" id="area">
                    <option value="" selected disabled hidden></option>
                    <option value="1">Administração</option>
                    <option value="2">Engenharia</option>
                    <option selected value="3">Tecnologia</option>
                </Select>
            </label>
            <label htmlFor="tempo">
                Tempo de experiência na área*
                <Select name="tempo" id="tempo">
                    <option selected value="1">1-2 anos</option>
                    <option value="2">2-3 anos</option>
                    <option value="3">3 anos ou mais</option>
                </Select>
            </label>
        </AreasWrapper>
    )
}
