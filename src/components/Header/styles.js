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
`;

export const NavBar = styled.ul`
  flex: 1;
  margin-top: 12px;
  align-items: center;
  display: flex;
`;

export const Item = styled.li`
  cursor: pointer;
  position: relative;
  color: #fff;
  font-size: 1.4rem;
  font-weight: 400;

  & + li {
    margin-left: 4.8rem;
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
    transform: scaleX(0);
    transform-origin: center;
    transition: transform 200ms ease-in;
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
`;

export const Logo = styled.img`
  width: 4.5rem;
  height: 4.5rem;
  max-width: 4.5rem;
`;
