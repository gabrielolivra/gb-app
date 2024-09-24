import React from 'react'
import styled from 'styled-components'

const Titulo = styled.h1`
color: white;
font-size: 40px;
`;


function Title(props) {
    return (
        <Titulo>{props.nome}</Titulo>
    )
}

export default Title
