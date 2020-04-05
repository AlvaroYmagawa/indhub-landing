import styled from 'styled-components';
import { colors } from '~/styles';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  color: #fff;
  padding: 1.6rem 9.6rem;
`;

export const Main = styled.div`
  display: flex;
  width: 100%;
  align-items: flex-end;
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
`;

export const Form = styled.form`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Input = styled.input`
  max-width: 50rem;
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
  margin-bottom: 4rem;

  svg {
    & + svg {
      margin-left: 4.8rem;
    }
  }
`;

export const Background = styled.img`
  position: fixed;
  max-width: initial;
  right: 0%;
  bottom: 0%;
`;
