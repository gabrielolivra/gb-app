import React from 'react';
import styled from 'styled-components';

function Home() {

    const Titulo = styled.h1`text-align:center; font-size:50px;`;
    return (
        <div>
            <Titulo>App</Titulo>
            <p>Bem-vindo à página inicial!</p>
        </div>
    );
}

export default Home;
