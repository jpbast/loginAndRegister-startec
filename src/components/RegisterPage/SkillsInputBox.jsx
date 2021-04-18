/* eslint-disable eqeqeq */
import React, { useContext } from 'react'
import styled from 'styled-components'
import { RegisterSectionContext } from '../../contexts/RegisterSectionContext'

const SkillWrapper = styled.div`
    padding: 0.9rem;
    width: 43.6%;
    background-color: white;
    margin-bottom: 0.2rem;

    div, input {
        background-color: white;
    }

    input {
        width: 5rem;
    }
    & > div {
        display: inline-block;
        margin-right: 0.4rem;
        margin-bottom: 0.4rem;
    }

    & > div > div {
        display: flex;
        gap: 0.3rem;
        border: solid 2px rgb(0, 120, 255);
        border-radius: 1rem;
        padding: 0.3rem;
    }

    .close-button {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        position: relative;
        cursor: pointer;
    }

    .trace {
        width: 0.8rem;
        height: 2px;
        background-color: black;
    }

    .trace:first-child {  
        left: 0;
        transform: rotate(45deg);
    }
    .trace:last-child {
        position: absolute;
        left: 0;
        top: 50%;
        transform: rotate(-45deg)  translateY(-50%);
    }

    @media screen and (max-width: 1200px) {
        width: 70%;
    }

    @media screen and (max-width: 900px) {
        width: 85%;
    }

    @media screen and (max-width: 700px) {
        width: 100%;
    }
`

export default function SkillsInputBox() {
    const { skill } = useContext(RegisterSectionContext)
    const [skills, setSkills] = skill

    function handleInput(event) {
        if (event.key === 'Enter') {
            setSkills([...skills, event.target.value])
            event.target.value = ''
        }       
    }

    function handleRemove(skill) {
        setSkills(skills.filter(item => skill != item))
    }

    return (
        <>
            <span>Habilidades</span> 
            <label htmlFor="input">
                <SkillWrapper>
                    { skills.map(skill => {
                        return (
                            <div>
                                <div>
                                    <span>{skill}</span>
                                    <div onClick={() => handleRemove(skill)} className="close-button">
                                        <div className='trace' />
                                        <div className='trace' />
                                    </div>
                                </div>
                            </div>
                        )
                    }) }
                    <input onKeyUp={handleInput} id="input" type="text"/> 
                </SkillWrapper>
            </label>
            <span style={{fontSize: '0.9rem'}}>ex: react, node, javascript</span>
        </>   
    )
}
