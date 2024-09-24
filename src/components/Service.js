import React from 'react'
import styled from 'styled-components'


const Div = styled.div`
display:flex;
justify-content:space-around;
align-items: center;
background:black;
width: 400px;
border-radius: 10px;
height: 180px;
`;


const Icon = styled.div`
width:100px;
height:100px;
background: blue;
border-radius:10px;
`;

const CaixaTexto = styled.div` 
display:flex; 
flex-direction:column; 
align-items:start; 
justify-content:center;`;


const Title = styled.h2`
color:white; 
font-size:16px;`


const Text = styled.p`
color:white; 
font-size:12px;
width:200px;`



function Service(props) {
    return (
        <Div>
            <Icon><img src={props.src} alt={props.alt} /></Icon>
            <CaixaTexto>
                <Title>{props.title}</Title>
                <Text>{props.text}</Text>
            </CaixaTexto>
        </Div>
    )
}

export default Service
