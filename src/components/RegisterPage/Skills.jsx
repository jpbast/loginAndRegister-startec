import React from 'react'
import styled from 'styled-components'
import { Title, Select } from '../../styles/RegisterStyle'
import AreasOfInterests from './AreasOfInterests'

const SkillsWrapper = styled.div`
    background-color: rgb(235, 235, 235);
`

export default function Skills() {
    return (
        <SkillsWrapper>
            <Title>ÁREAS DE INTERESSE</Title>
            <AreasOfInterests />
        </SkillsWrapper>
    )
}
