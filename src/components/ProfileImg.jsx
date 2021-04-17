import React from 'react'
import styled from 'styled-components'
import uploadIcon from '../assets/images/upload-icon.svg'

const ProfileWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
    padding-top: 2rem;

    div:first-child {
        width: 5rem;
        height: 5rem;
        background-color: rgb(220, 0, 0);
        border-radius: 50%;
    }
    
    div:last-child {
        cursor: pointer;
    }

    img {
        width: 1.2rem;
        margin-right: 0.5rem;
    }

    span {
        transition: 0.2s;
    }

    span:hover {
        color: rgb(120, 120, 120);
    }
`

export default function ProfileImg() {
    return (
        <ProfileWrapper>
            <div></div>
            <div>
                <img src={uploadIcon} alt="Upload Icon"/>
                <span>Alterar foto de perfil</span> 
            </div>
        </ProfileWrapper>
    )
}
