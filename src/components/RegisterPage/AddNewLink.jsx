import React from 'react'
import styled from 'styled-components'

const NewLinkWrapper = styled.div`
    width: 100%;
    display: flex;
    gap: 2rem;

    input {
        margin-bottom: 1.5rem;
    }

    div {
        display: flex;
        align-items: flex-end;
        gap: 0.8rem;
    }

    div:hover {
        cursor: pointer;
    }

    .addLink div, .removeLink div {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 1.5rem;
        height: 1.5rem;
        border-style: solid;
        border-width: 2px;
        position: relative;
        transition: 0.2s;
    }

    .addLink div {
        color: rgb(0, 0, 150);
    }

    .addLink div div {
        background-color: rgb(0, 0, 150);
    }

    .addLink div:hover {
        color: rgb(0, 0, 255);
    }

    .addLink div div, .removeLink div div {
        width: 0.8rem;
        height: 2px;
        position: absolute;
        border: none;
    }

    .addLink div div:first-child {
        transform: rotate(90deg);
    }

    span {
        transition: 0.2s;
    }

    div span:hover {
        color: rgb(120, 120, 120);
    }

    .removeLink div {
        color: rgb(150, 0, 0);
    }

    .removeLink div div {
        background-color: rgb(150, 0, 0);
    }

    @media screen and (max-width: 700px) {
        width: 100%;
    }
`

export default function AddNewLink(props) {
    
    return (
        <NewLinkWrapper>
            <div onClick={props.handleNewLink} className="addLink">
                <div>
                    <div />
                    <div />
                </div>
                {props.children[0]}
            </div>
            { console.log(props.children[0].props.children) }
            { props.state.length > 0 && (
                <div onClick={props.handleRemoveLink} className="removeLink">
                    <div>
                        <div />
                    </div>
                    {props.children[1]}
                </div>
            ) }
        </NewLinkWrapper>
    )
}
