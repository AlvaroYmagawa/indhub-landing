import React from 'react';
import { Container, NavBar, Item, IndHub, Logo } from './styles';

// CUSTOM IMPORTS
import indHub from '~/assets/indHub.png';
import logo from '~/assets/logo.png';

export default function Header() {
  return (
    <>
      <Container>
        <NavBar>
          <Item>HOME</Item>
          <Item>SOBRE</Item>
          <Item>CONTATO</Item>
        </NavBar>

        <div className="fragment">
          <IndHub src={indHub} alt="indHub" />
        </div>

        <div className="fragment">
          <Logo src={logo} alt="indHub" />
        </div>
      </Container>
    </>
  );
}
