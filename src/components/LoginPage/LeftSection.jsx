import React, { useContext } from 'react'
import FirstSection from './FirstSection'
import styled from 'styled-components'
import SecondSection from './SecondSection'
import ThirdSection from './ThirdSection'
import { LoginSectionContext } from '../../contexts/LoginSectionContext'

const LeftSectionWrapper = styled.section`
    padding: 1.2rem 0 1.2rem 10.278rem;
    background-color: rgb(0, 0, 57);
    color: white;
    display: flex;
    padding-top: ${props => props.section === 1 ? '7rem' : '5rem'};

    @media screen and (max-width: 1200px) {
        padding-left: 5rem;
    }

    @media screen and (max-width: 600px) {
        padding: 4rem 3rem 4rem 3rem;
        height: 100%;
        grid-row: 2;
    }
`

export default function LeftSection() {
    const [section] = useContext(LoginSectionContext)

    return (
        <LeftSectionWrapper section={section}>
            { section === 1 && <FirstSection /> }
            { section === 2 && <SecondSection /> }
            { section === 3 && <ThirdSection /> }
        </LeftSectionWrapper>
    )
}
