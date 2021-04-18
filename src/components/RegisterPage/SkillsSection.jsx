import React, { useContext, useState } from 'react'
import styled from 'styled-components'
import { RegisterSectionContext } from '../../contexts/RegisterSectionContext'
import Select from './Select'
import SkillsInputBox from './SkillsInputBox'
import Checkbox from './Checkbox'

const SkillsSectionWrapper = styled.div`
    padding-top: 2rem;
`

const SkillsExperience = styled.div`
    width: 70%;
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
    margin-top: 3rem;
    margin-bottom: 1.5rem;

    div {
        display: flex;
        align-items: center;
        gap: 1rem;
    }

    select {
        width: 30%;
        padding: 0.6rem;
    }

    div > span {
        width: 23.4rem;
    }

    span > span {
        font-weight: 900;
        color: rgb(0, 0, 60);
    }

    input[type=checkbox] {
        transform: scale(1.5);
        margin-right: 0.8rem;
    }

    @media screen and (max-width: 1550px) {
        width: 90%;
    }

    @media screen and (max-width: 1200px) {
        width: 95%;
        select {
            width: 20%;
        }
    }

    @media screen and (max-width: 1000px) {
        width: 110%;
    }

    @media screen and (max-width: 900px) {
        width: 100%;
        div {
            display: block;
            flex-direction: column;
            align-items: flex-start;
        }
        div > span {
            display: block;
            margin-bottom: 0.5rem;
        }
        select {
            width: 50%;
            margin-right: 1.5rem;
        }
    }

    @media screen and (max-width: 500px) {
        div > span {
            width: 100%;
            display: block;
            margin-bottom: 0.5rem;
        }

        select {
            width: 50%;
            margin-right: 1rem;
        }
    }

    @media screen and (max-width: 400px) {
        div > span {
            width: 100%;
            display: block;
            margin-bottom: 0.5rem;
        }

        select {
            display: block;
            margin-bottom: 1rem;
        }

        input {
            margin-bottom: 1rem;
            margin-left: 0.3rem;
        }
    }

`

export default function SkillsSection() {
    const { skill } = useContext(RegisterSectionContext)
    const [skills, setSkills] = skill
    const [checkVal, setCheckVal] = useState(0, () => console.log(checkVal))

    function handleCheckbox(event) {
        if (checkVal > 2 && event.target.checked) 
            event.preventDefault()
        else 
            if (event.target.checked)
                setCheckVal(checkVal+1)
            else
                setCheckVal(checkVal-1)
    }

    return (
        <SkillsSectionWrapper>
            <SkillsInputBox />
            <SkillsExperience>
                { skills.map(skill => {
                    return (
                        <div>
                            <span>Nos conte seu tempo de experiência com <span>{skill}</span></span>
                            <Select id="cidade" options={['1-2 anos', '2-3 anos', '3 anos mou mais']} />
                            {/* <Select name="teste" id="">
                                <option value="">1-2 anos</option>]
                                <option value="">2-3 anos</option>
                                <option value="">3 anos ou mais</option>
                            </Select> */}
                            <Checkbox onClick={handleCheckbox} id={skill}>Habilidade principal</Checkbox>
                        </div>
                    )
                }) }
            </SkillsExperience>
            <div style={skills.length === 0 ? {display: 'none'} : {}}>
                <span style={{fontSize: '0.8rem', display: 'block'}}>obs: não selecionar mais de 15 habilidades, sendo 3 principais</span>     
                <span style={{display: 'block', fontSize: '0.8rem', marginBottom: '3rem'}}>obs: dependendo do processo, podem haver testes técnicos que comprovem seus conhecimentos</span> 
            </div>
        </SkillsSectionWrapper>
    )
}
