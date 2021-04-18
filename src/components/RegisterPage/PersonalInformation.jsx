import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import Select from './Select'
import { getCities, ibgeAPI } from '../../services/ibgeApi'
import InputMask from 'react-input-mask'
import InputMessage from '../LoginPage/InputMessage'

const PersonalInfoWrapper = styled.div`
    width: 95%;
    padding-top: 3rem;
    display: grid;
    grid-template: 1fr 1fr 1fr / 1fr 1fr;
    column-gap: 4rem;
    row-gap: 2rem;

    @media screen and (max-width: 800px) {
        column-gap: 3rem;
    }

    @media screen and (max-width: 700px) {
        width: 100%;
    }

    @media screen and (max-width: 500px) {
        grid-template: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr / none;
    }
`

export default function PersonalInformation() {
    const [ufs, setUfs] = useState([])
    const [cities, setCities] = useState([])
    const [linkedin, setLinkedin] = useState(false)
    const [name, setName] = useState(false)
    const [lastName, setLastName] = useState(false)
    const [email, setEmail] = useState(false)
    const emptyField = 'Campo vazio'
    const emailRE = /^[^@]+@[^@]+\.[^@]+$/

    useEffect(() => {
        getUfs()
    }, [])

    async function getUfs() {
        const options = {
            url: '?orderBy=nome',
            method: 'GET',
            headers: new Headers({
                'Content-Type': 'application/json',
            })
        }
        const uf = await ibgeAPI(options)
            .then(res => res.data)
            .catch(err => err)
        uf.push({nome: 'Escolha um estado', id: ''})
        setUfs(uf)
    }

    async function handleSelect(event) {
        const cities = await getCities(event.target.value)
        cities.push('Escolha uma cidade')
        setCities(cities)
    }
    
    const nameMessage = val => val ? setName('') : setName(emptyField)
    const lastNameMessage = val => val ? setLastName('') : setLastName(emptyField)
    const emailMessage = val => !val ? setEmail(emptyField) : (emailRE.test(val) ? setEmail('') : setEmail('E-mail inválido'))
    const linkedinMessage = val => val ? setLinkedin('') : setLinkedin(emptyField)
 
    return (
        <PersonalInfoWrapper>
            <InputMessage message={name} onChange={(e) => nameMessage(e.target.value)} id="nome" type="text">Nome*</InputMessage>
            <InputMessage message={lastName} onChange={(e) => lastNameMessage(e.target.value)} id="lastname" type="text">Sobrenome*</InputMessage>
            <InputMessage message={email} onChange={(e) => emailMessage(e.target.value)} id="email" type="text">E-mail*</InputMessage>
            <label htmlFor="telefone">
                Telefone*
                <InputMask style={{width: '100%', padding: '0.9rem', backgroundColor: 'white'}} id='telefone' mask='(99) 99999-9999' />
            </label>
            <Select onChange={handleSelect} id="localidade" options={ufs} selected={ufs.length-1} disabled hidden>
                Localidade*
            </Select>
            <Select id="cidade" options={cities} selected={cities.length-1} disabled hidden>
                Cidade*
            </Select>
            <Select id="vaga" options={['', 'Não tenho pressa', 'Estou buscando casualmente', 'Estou buscando ativamente']} selected={0} disabled hidden>
                Como está a sua procura por vagas?*
            </Select>
            <InputMessage message={linkedin} onChange={(e) => linkedinMessage(e.target.value)} type="text" placeholder="www.linkedin.com/in/nome">Linkedin*</InputMessage>
        </PersonalInfoWrapper>
    )
}
