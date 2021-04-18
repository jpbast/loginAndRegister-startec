import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Input } from '../../styles/RegisterStyle'
import Select from './Select'
import { getCities, ibgeAPI } from '../../services/ibgeApi'
import InputMask from 'react-input-mask'

const PersonalInfoWrapper = styled.div`
    width: 95%;
    padding-top: 3rem;
    display: grid;
    grid-template: 1fr 1fr 1fr / 1fr 1fr;
    column-gap: 4rem;
    row-gap: 1.5rem;

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
    const normalInputs = ['Nome*', 'Sobrenome*', 'E-mail*']
    const [ufs, setUfs] = useState([])
    const [cities, setCities] = useState([])

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

    return (
        <PersonalInfoWrapper>
            { normalInputs.map(input => {
                return (
                    <label htmlFor={input}>
                        {input}
                        <Input id={input} type="text" placeholder={input === 'E-mail' ? 'contato@gmail.com' : ''}/>
                    </label>
                )
            })}
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
            {/* <label htmlFor="vaga">
                Como está a sua procura por vagas?*
                <Select name="vaga" id="vaga">
                    <option value="" selected disabled hidden></option>
                    <option value="1">Não tenho pressa</option>
                    <option value="2">Estou buscando casualmente</option>
                    <option value="3">Estou buscando ativamente</option>
                </Select>
            </label> */}
            <label htmlFor="vaga">
                Linkedin*
                <Input type="text" placeholder='www.linkedin.com/in/nome' />
            </label>
            
        </PersonalInfoWrapper>
    )
}
