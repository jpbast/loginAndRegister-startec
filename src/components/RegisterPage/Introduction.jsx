import React from 'react'
import styled from 'styled-components'
import { Title } from '../../styles/RegisterStyle'
import ProfileImg from './ProfileImg'
import PersonalInformation from './PersonalInformation'
import Resume from './Resume'
import Portfolio from './Portfolio'

const IntroductionWrapper = styled.div`
    background-color: rgb(235, 235, 235);
`

export default function Introduction() {
    return (
        <IntroductionWrapper>
            <Title>INFORMAÇÕES PESSOAIS</Title>
            <ProfileImg />
            <PersonalInformation />
            <Resume />
            <Title>PORTFOLIO</Title>
            <Portfolio />
        </IntroductionWrapper>
    )
}
