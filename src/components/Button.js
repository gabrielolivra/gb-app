import React from 'react'
import styled from 'styled-components'


const Btn = styled.button`
  width: 165px;
  height: 50px;
  font-size:14px;
  cursor: pointer;
  color: #fff;
  border:1px solid white;
  border-radius: 1rem;
  position: relative;
  background: black;
  transition: 0.3s; 
  &::after {
    content: '';
  width: 100%;
  height: 100%;
  background-image: radial-gradient( circle farthest-corner at 10% 20%,  rgba(255,94,247,1) 17.8%, rgba(2,245,255,1) 100.2% );
  filter: blur(15px);
  z-index: -1;
  position: absolute;
  left: 0;
  top: 0;
  }&:hover{
  transform: scale(0.9) rotate(3deg);
  transition: 0.5s;
  border: none;
  }
`;


function Button(props) {
  return (
    <Btn>
      {props.nome}
    </Btn>
  )
}

export default Button
