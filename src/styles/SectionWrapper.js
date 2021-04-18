import styled from 'styled-components'

export const SectionWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4rem;
    width: 80%;

    img {
        width: 1.5rem;
    }

    .title {
        font-size: 4rem;
        font-weight: 700;
        display: block;
    }

    & > div {
        display: flex;
        flex-direction: column;
        gap: 1.6rem;
    }

    label {
        display: flex;
        flex-direction: column;
    }

    label span {
        display: block;
    }

    input {
        width: 100%;
        padding: 1.2rem;
    }

    @media screen and (max-width: 600px) {
        width: 100%;
    }
`

export const BackButton = styled.div`
    &:first-child {
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }

    &:first-child div {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 0.4rem;
        transition: 0.2s;
        cursor: pointer;
    }

    &:first-child div:hover {
        color: rgb(200, 200, 200)
    }
`

export const ButtonRed = styled.button` 
    padding: 1.2rem;
    font-weight: 900;
    background-color: red;
    color: white;
    transition: 0.2s;
    
    &:hover {
        background-color: rgb(200, 0, 0);
    } 
`