import React, { useContext } from 'react'
import styled from 'styled-components'
import { RegisterSectionContext } from '../../contexts/RegisterSectionContext'

const HeaderWrapper = styled.header`
    ul {
        display: flex;
        gap: 8rem;
        border-style: solid;
        border-color: rgb(170, 170, 170);
        border-width: 0 0 2px 0;
        padding-bottom: 0.8rem;
        width: 95%;
        margin-bottom: 2rem;
    }
    li {
        display: flex;
        gap: 0.5rem;
        align-items: center;
        font-weight: 900;
    }
    li span:first-child {
        font-size: 0.9rem;
        border-radius: 50%;
        width: 1.5rem;
        height: 1.5rem;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: rgb(170, 170, 170);
        color: rgb(235, 235, 235);
    }

    li span:last-child {
        color: rgb(170, 170, 170);
    }

    .selected span:first-child {
        background-color: red;
    }

    .selected span:last-child {
        color: black
    }

    @media screen and (max-width: 700px) {
        ul {
            width: 100%;
            gap: 6rem;
        }
    }

    @media screen and (max-width: 700px) {
        ul {
            gap: 0;
            justify-content: space-between;
        }

        li {
            gap: 0.3rem;
        }
    }
`

export default function Header() {
    const [registerSection, setRegisterSection] = useContext(RegisterSectionContext)

    return (
        <HeaderWrapper>
            <ul>
                <li className={registerSection === 1 ? 'selected' : ''}>
                    <span>1</span>
                    <span>Introdução</span> 
                </li>
                <li className={registerSection === 2 ? 'selected' : ''}>
                    <span>2</span>
                    <span>Habilidades</span> 
                </li>
                <li className={registerSection === 3 ? 'selected' : ''}>
                    <span>3</span>
                    <span>Preferências</span> 
                </li>
            </ul>
        </HeaderWrapper>
    )
}
