import styled from 'styled-components';
import Header from '~/components/Header';
import { colors } from '~/styles';

export const Container = styled.div`
  margin: 0 auto;
  max-width: 1280px;
  max-height: 720px;
  min-height: 720px;
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background: ${colors.primaryDark};
  box-shadow: 5px 5px 15px #00000050;
  padding: 0 5%;
`;

export const NavHeader = styled(Header)`
  flex: 1;
`;

export const Content = styled.div`
  flex: 5;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  color: #fff;
  background: ${colors.primaryDark};

  @media (max-width: 1070px) {
    font-size: 4.5rem;
  }

  @media (max-width: 880px) {
    font-size: 4.5rem;
  }
`;

export const Main = styled.div`
  flex: 1;
  display: flex;
  width: 100%;
  align-items: center;

  @media (max-width: 880px) {
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  }
`;

export const Slogan = styled.p`
  text-align: left;
  flex: 1.5;
  font-weight: bold;
  color: #fff;
  font-size: 5rem;

  span {
    color: ${colors.accent};
  }

  @media (max-width: 1070px) {
    font-size: 4.5rem;
  }

  @media (max-width: 880px) {
    display: flex;
    align-items: center;
    width: 100%;
    font-size: 3rem;
  }
`;

export const Form = styled.form`
  flex: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Input = styled.input`
  border-radius: 4px;
  padding: 16px;
  border: none;
  background: #ffffff10;
  color: #fff;
  font-size: 16px;
  margin-bottom: 8px;

  ::placeholder {
    color: #ffffff80;
    font-weight: 300;
  }
`;

export const Small = styled.small`
  margin-top: 8px;
  font-size: 10px;
  text-align: left;
  font-weight: bold;

  span {
    color: ${colors.accent};
  }
`;

export const Contacts = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    cursor: pointer;
    color: #ffffff80;

    &:hover {
      color: #fff;
    }

    & + svg {
      margin-left: 4.8rem;
    }
  }

  @media (max-width: 880px) {
    position: unset;
  }
`;

export const Background = styled.img`
  position: absolute;
  max-width: initial;
  bottom: 0%;
  right: 0%;
`;
