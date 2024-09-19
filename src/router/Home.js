import React from 'react';
import styled from 'styled-components';

function Home() {


    const DivInicial = styled.div`
    display:flex; 
    flex-direction:column; 
    align-items:flex-start; 
    margin:60px 60px;`;

    const Titulo = styled.h1`
    text-align:start; 
    font-size:60px; 
    font-family:Rubik+Mono+One; 
    letter-spacing:0.1em;`;

    const Paragrafo = styled.p`
    font-size:26px; 
    width:70%; 
    text-align:start; 
    font-weight:600; 
    font-family:Alata`;

    const Overview = styled.div`
     margin:60px 60px;`;

    const Text = styled.p`
    font-weight:${props => props.weight === 'subtitle' ? '800' : '400'}; 
    font-size:${props => props.size === 'large' ? '40px' : '18px'};
    text-transform: ${props => props.upper === 'true' ? 'uppercase' : 'none'}; 
    font-family: ${props => props.subtitle === 'true' ? 'Rubik+Mono+One' : 'Alata'}
    `;


    return (
        <div>
            <DivInicial>
                <Titulo>Hi, I'm GB!</Titulo>
                <Paragrafo>I develop websites,
                    interfaces and web applications, have interest in Data Structures and Algorithms, competitive programming.</Paragrafo>
            </DivInicial>
            <Overview>
                <Text upper="true">introduction</Text>
                <Text size="large" upper="true" weight="subtitle" subtitle="true">Overview.</Text>
                <Text>Innovative and passionate Computer Engineering student with a few internships, scholarships and fellowships under my belt, seeking to leverage extensive background in data analytics, web development, data structures and algorithms and investment banking. Proficient in Python, C++,SQL, Excel, Tableau and AutoCAD, I have successfully developed and maintained a few projects under my belt. Demonstrated strong problem-solving skills by implementing optimised algorithms and data structures in Python, C++ and a bit of Java, significantly improving system performance.</Text>
            </Overview>


        </div>
    );
}

export default Home;
