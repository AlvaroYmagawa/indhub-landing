import styled from 'styled-components';
import { darken } from 'polished';
import { colors } from '~/styles';

export const Container = styled.button`
  border-radius: 4px;
  padding: 16px;
  color: #fff;
  border: none;
  font-weight: bold;
  box-shadow: 2px 4px 5px ${colors.regularShadow};

  &:hover {
    background: ${darken(0.1, colors.accent)};
    transition: opacity background 0.3s ease;
  }
`;
