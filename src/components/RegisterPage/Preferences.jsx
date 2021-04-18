import React, { useState } from 'react'
import styled from 'styled-components'
import Select from './Select'
import Checkbox from './Checkbox'
import Salary from './Salary'

const PreferencesWrapper = styled.div`
    width: 95%;

    select { 
        width: 100%;
    }

    & > div:first-child {
        display: grid;
        grid-template-columns: 1fr 1fr;
    }

    & > div:first-child div div {
        margin-bottom: 3rem;
    }

    & > div:first-child span {
        display: block;
        margin-bottom: 1rem;
    }

    & > div:first-child div + label {
        display: none;
    }

    & > div div label {
        margin-right: 2.5rem;
    }

    & > div span + label {
        margin-left: 0.3rem;
    }
    
    & > label select {
        width: 43.6%;
        display: flex;
        /* background-color: red; */
    }

    @media screen and (max-width: 900px) {
        width: 70%;
        & > div:first-child {
            display: grid;
            grid-template: 1fr 0fr / none;
        }

        & > label select {
            width: 100%;
        }
    }

    @media screen and (max-width: 500px) {
        width: 100%;
    }

`

export default function Preferences() {
    const [checkPresencial, setCheckPresencial] = useState(false)
    function handlePresencial() {
        setCheckPresencial(!checkPresencial)         
    }

    return (
        <PreferencesWrapper>
            <div>
                <div>
                    <div>
                        <span>Quais modelos de trabalho você prefere?</span>
                        <Checkbox>Remoto</Checkbox>
                        <Checkbox onClick={handlePresencial}>Presencial</Checkbox>
                    </div>
                    <div>
                        <span>Quais modelos de contratação você prefere?</span>
                        <Checkbox>CLT</Checkbox>
                        <Checkbox>PJ</Checkbox>
                        <Checkbox>Estágio</Checkbox>
                    </div>
                </div>
                <Select style={checkPresencial ? {display: 'block'} : {display: 'none'}} id="cities" options={['Rio de Janeiro', 'São Paulo', 'Porto Alegre']}>
                    Cidade onde você gostaria de trabalhar
                </Select>
                {/* <label style={checkPresencial ? {display: 'block'} : {display: 'none'}} htmlFor="cities">
                    Cidade onde você gostaria de trabalhar
                    <Select id="cities">
                        <option value="1">Rio de Janeiro</option>
                        <option value="2">São Paulo</option>
                        <option value="3">Porto Alegre</option>
                    </Select>  
                </label>  */}
            </div>
            <Salary />
            <Select id="startec" options={['Linkedin', 'Facebook', 'Indicação']}>
                Como conheceu a Startec?
            </Select>
            {/* <label htmlFor="startec">
                Como conheceu a Startec?
                <Select id="startec">
                    <option select value="1">Linkedin</option>
                    <option value="2">Facebook</option>
                    <option value="3">Indicação</option>
                </Select>
            </label> */}
        </PreferencesWrapper>
    )
}
