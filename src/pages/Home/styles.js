import styled from 'styled-components';
import { colors } from '~/styles';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  color: #fff;
  padding: 1.6rem 9.6rem;

  @media (max-width: 1070px) {
    font-size: 4.5rem;

    padding: 1.6rem 5rem;
  }

  @media (max-width: 700px) {
    font-size: 4.5rem;

    padding: 1.6rem 2.4rem;
  }
`;

export const Main = styled.div`
  flex: 1;
  display: flex;
  width: 100%;
  align-items: flex-end;

  @media (max-width: 700px) {
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
  margin-right: 5%;
  font-size: 5rem;

  span {
    color: ${colors.accent};
  }

  @media (max-width: 1070px) {
    font-size: 4.5rem;
  }

  @media (max-width: 700px) {
    flex: 1;
    align-self: flex-start;
    font-size: 2.8rem;
    margin: 3.2rem 0;
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
  background: #fff;
  margin-bottom: 8px;

  ::placeholder {
    color: ${colors.black75};
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
  display: flex;
  position: absolute;
  bottom: 0%;
  margin: 4rem 0;

  svg {
    & + svg {
      margin-left: 4.8rem;
    }
  }

  @media (max-width: 700px) {
    position: unset;
    margin: 3.2rem 0 0 0;
  }
`;

export const Background = styled.img`
  position: fixed;
  max-width: initial;
  right: 0%;
  bottom: 0%;
`;
