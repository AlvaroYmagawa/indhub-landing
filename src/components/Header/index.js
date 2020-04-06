import React from 'react';
import { MdMenu } from 'react-icons/md';
import { Container, NavBar, Item, IndHub, Logo } from './styles';

// CUSTOM IMPORTS
import indHub from '~/assets/indHub.png';
import logo from '~/assets/logo.png';

export default function Header() {
  return (
    <>
      <Container>
        <MdMenu className="menu" color="#fff" size={24} />
        <NavBar>
          <Item checked>HOME</Item>
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
