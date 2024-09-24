import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Button from './Button';
import Logo from './Logo';


const Nav = styled.nav`
background:black;
display:flex;
justify-content:space-between;
align-items: center;
margin:50px;
padding:10px;
background-color: black;
opacity: 0.7;
`;


const Ul = styled.ul
    `display:flex;
    justify-content:space-around;
    padding:25px;
    align-items:center;
    
`;
const Li = styled.li`margin-left:40px;`;


const Rotas = styled.li`color:white;`;


function Header() {
    return (
        <div>
            <Nav>
                <Logo />
                <Ul>
                    <Rotas>
                        <Li><Link to="/">Home</Link></Li>
                    </Rotas>
                    <Rotas>
                        <Li><Link to="/about-me">About me</Link></Li>

                    </Rotas>
                    <Rotas>
                        <Li><Link to="/services">Services</Link></Li>

                    </Rotas>
                    <Rotas>
                        <Li><Link to="/portfolio">Portfolio</Link></Li>

                    </Rotas>

                </Ul>
                <Button nome="Contact me"></Button>
            </Nav>
        </div>
    )
}

export default Header
