import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import startecLogo from '../assets/images/startec-logo.png'

const NavbarWrapper = styled.header`
    width: 100%;
    background-color: white;
    padding: 1.2rem 10.278rem 1.2rem 10.278rem;
    display: flex;
    justify-content: space-between;
    align-items: center;

    img {
        width: 8.88rem;
    }

    ul {
        display: flex;
        gap: 9rem;
    }

    li {
        transition: 0.2s;
        cursor: pointer;
    }

    li:hover {
        color: #00bfff;
    }

    a {
        display: flex;
    }

    .menu-icon-container {
        cursor: pointer;
        display: none;
        position: relative;
    }

    .menu-icon {
        width: 25px;
        height: 3px;
        border-radius: 1px;
        background-color: black;
        margin: 3px 0;
    }

    @media screen and (max-width: 1200px) {
        padding: 1.2rem 5rem 1.2rem 5rem;
        height: auto;
        ul {
            gap: 5rem;
        }
    }

    @media screen and (max-width: 600px) {
        padding: 1.2rem 3rem 1.2rem 3rem;
        ul {
            display: none;
            position: absolute;
            flex-direction: column;
            top: 49px;
            left: 0;
            background-color: white;
            width: 100%;
            gap: 0;
        }

        li {
            padding: 2rem 3rem 2rem 3rem;
            transition: 0.2s;
        }
        li:hover {
            background-color: blue;
            color: white;
        }

        .menu-icon-container {
            display: inline-block;
        }
    }
`
export default function Navbar() {
    const [click, setClick] = useState(true)
    const menuClose = {
        first: {
            transform: 'rotate(45deg)',
        },
        second: {
            position: 'absolute',
            top: '0',
            transform: 'rotate(-45deg)',
        },
        third: {
            display: 'none'
        }
    }

    function handleIcon() {
        setClick(!click)
    }

    window.addEventListener('resize', () => {
        if (window.innerWidth > 600 && !click)
            setClick(true)
    })

    useEffect(() => {
        if (window.innerWith <= 600) {
            setClick(false)
        }
    }, [])

    return (
        <NavbarWrapper>
            <a href="https://startecjobs.com/" target="blank"><img src={startecLogo} alt="Startec Logo"/></a>
            <ul style={click ? {display: 'flex'} : {display: 'none'}}>
                <li>Recursos</li>
                <li>Vagas</li>
                <li>Entrar</li>
            </ul>
            <div onClick={handleIcon} className="menu-icon-container">
                <div className="menu-icon" style={click ? menuClose.first : {}}></div>
                <div className="menu-icon" style={click ? menuClose.second : {}}></div>
                <div className="menu-icon" style={click ? menuClose.third : {}}></div>
            </div>
        </NavbarWrapper>
    )
}