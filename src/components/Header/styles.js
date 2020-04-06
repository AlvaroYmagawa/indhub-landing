import styled from 'styled-components';
import { colors } from '~/styles';

export const Container = styled.div`
  position: fixed;
  top: 0%;
  width: 100%;
  display: flex;
  padding: 1.6rem 9.6rem;
  align-items: center;
  background: ${colors.primaryDark};

  .fragment {
    flex: 1;

    & + .fragment {
      text-align: right;
    }
  }

  .menu {
    display: none;
  }

  @media (max-width: 1070px) {
    font-size: 4.5rem;

    padding: 1.6rem 5rem;
  }

  @media (max-width: 700px) {
    padding: 1.6rem 2.4rem;

    .fragment {
      flex: 1;
      display: flex;

      & + .fragment {
        display: none;
      }
    }

    .menu {
      cursor: pointer;
      position: absolute;
      display: flex;
    }
  }
`;

export const NavBar = styled.ul`
  flex: 1;
  margin-top: 12px;
  align-items: center;
  display: flex;

  @media (max-width: 700px) {
    display: none;
  }
`;

export const Item = styled.li`
  cursor: pointer;
  position: relative;
  color: ${props => (props.checked ? '#fff' : colors.white75)}};
  font-size: 1.4rem;
  font-weight: 400;

  & + li {
    margin-left: 10%;
  }

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
  margin: 0 auto;

  @media (max-width: 700px) {
    width: 10.2rem;
    height: 3.2rem;
    max-width: 10.2rem;
  }
`;

export const Logo = styled.img`
  width: 4.5rem;
  height: 4.5rem;
  max-width: 4.5rem;

  @media (max-width: 700px) {
    display: none;
  }
`;
