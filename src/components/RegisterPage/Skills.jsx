import React from 'react'
import styled from 'styled-components'
import { Title } from '../../styles/RegisterStyle'
import AreasOfInterests from './AreasOfInterests'
import SkillsSection from './SkillsSection'
import Language from './Language'

const SkillsWrapper = styled.div`
    background-color: rgb(235, 235, 235);
`

export default function Skills() {
    return (
        <SkillsWrapper>
            <Title>ÁREAS DE INTERESSE</Title>
            <AreasOfInterests />
            <Title>HABILIDADES</Title>
            <SkillsSection />
            <Language />
        </SkillsWrapper>
    )
}
