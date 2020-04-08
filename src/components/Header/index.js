import React from 'react';
import PropTypes from 'prop-types';
import { MdMenu } from 'react-icons/md';
import { Container, NavBar, Item, IndHub, Line } from './styles';

// CUSTOM IMPORTS
import indHub from '~/assets/indHub.png';

export default function Header({ className }) {
  return (
    <Container className={className}>
      {/* <Logo src={logo} alt="indHub" /> */}
      <IndHub src={indHub} alt="indHub" />

      <MdMenu className="menu" color="#fff" size={24} />

      <NavBar>
        <Item checked>HOME</Item>
        <Item>SOBRE</Item>
        <Item>CONTATO</Item>
      </NavBar>

      <Line />
    </Container>
  );
}

Header.propTypes = {
  className: PropTypes.string,
};

Header.defaultProps = {
  className: null,
};
