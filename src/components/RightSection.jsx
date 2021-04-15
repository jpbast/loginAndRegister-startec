import React, { useContext } from 'react'
import firstSectionImg from '../assets/images/first-section-img.jpeg'
import secondAndThirdSectionImg from '../assets/images/second-and-third-section-img.png'
import styled from 'styled-components'
import { LoginSectionContext } from '../contexts/LoginSectionContext'

const Img = styled.div`
    background-image: url(${props => props.section === 1 ? firstSectionImg : secondAndThirdSectionImg});
    background-size: cover;
    color: white;
    display: flex;
    justify-content: flex-end;
    flex-direction: column;
    gap: 1rem;
    padding: 0 2rem 8rem 2rem;
    font-size: 1.5rem;

    @media screen and (max-width: 600px) {
        padding: 0 3rem 4rem 3rem;
    }
`

export default function RightSection() {
    const [section, setSection] = useContext(LoginSectionContext);

    return (
        <Img section={section}>
            <h2>
                { section === 1 ? 'Faça parte da comunidade' : 'Amanda, SDR na Miika Nacional' }
            </h2>
            <span>
                { section === 1 ? 
                'Encontre a vaga perfeita para você no mercado de tecnologia e mantenha-se atualizado com apenas alguns cliques.' : 
                '"A Startec conseguiu me conectar a uma empresa que possui os mesmos princípios e propósitos que os meus."' }    
            </span>
        </Img>
    )
}