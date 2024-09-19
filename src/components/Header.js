import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`background:black;`;

const Ul = styled.ul
    `display:flex;
justify-content:space-around;
padding:25px;
`;

const Rotas = styled.li`color:white;`;


function Header() {
    return (
        <div>
            <Nav>
                <Ul>
                    <Rotas>
                        <Link to="/">Inicio</Link>
                    </Rotas>
                    <Rotas>
                        <Link to="/contato">Contato</Link>
                    </Rotas>
                    <Rotas>
                        <Link to="/projetos">Projetos</Link>
                    </Rotas>

                </Ul>
            </Nav>
        </div>
    )
}

export default Header
