import styled from 'styled-components';
import { colors } from '~/styles';

export const Container = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: ${colors.primaryDark};

  .menu {
    display: none;
  }

  @media (max-width: 1070px) {
    font-size: 4.5rem;
  }
  @media (max-width: 880px) {
    .menu {
      cursor: pointer;
      position: absolute;
      display: flex;
    }
  }
`;

export const Line = styled.div`
  position: absolute;
  bottom: 0%;
  background: #ffffff15;
  opacity: 0.8;
  width: 100%;
  height: 1px;
`;

export const NavBar = styled.ul`
  align-items: center;
  display: flex;
  max-width: 300px;
  width: 50%;
  justify-content: space-between;

  @media (max-width: 880px) {
    display: none;
  }
`;

export const Item = styled.li`
  cursor: pointer;
  position: relative;
  color: ${props => (props.checked ? '#fff' : colors.white75)}};
  font-size: 1.6rem;
  font-weight: 400;

  &::after {
    content: '';
    position: absolute;
    top: 100%;
    border-radius: 24px;
    left: 10%;
    margin-top: 4px;
    background: ${colors.accent};
    height: 2px;
    width: 80%;
    transform: scaleX(${props => (props.checked ? 1 : 0)});
    transform-origin: center;
    transition: transform 200ms ease-in;
  }

  &:hover {
    color: #fff;
  }

  &:hover::after {
    transform: scaleX(1);
  }
`;

export const IndHub = styled.img`
  width: 14rem;
  height: 4.5rem;
  max-width: 14rem;

  @media (max-width: 880px) {
    margin: 0 auto;
    width: 10.2rem;
    height: 3.2rem;
    max-width: 10.2rem;
  }
`;
