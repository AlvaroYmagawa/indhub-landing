import styled from 'styled-components';
import { darken } from 'polished';
import { colors } from '~/styles';

export const Container = styled.button`
  cursor: pointer;
  border-radius: 4px;
  padding: 16px;
  color: #fff;
  border: none;
  font-weight: bold;
  box-shadow: 2px 4px 5px ${colors.regularShadow};
  opacity: ${props => (props.disabled ? 0.7 : 1)};

  .loading {
    height: 10px;
    width: 10px;
  }

  &:hover {
    background: ${darken(0.1, colors.accent)};
    transition: opacity background 0.3s ease;
  }
`;

export const Loader = styled.div`
  color: #fff;
  font-size: 20px;
  font-weight: bold;
`;
