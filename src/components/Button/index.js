import React from 'react';
import PropTypes from 'prop-types';

import { Container, Loader } from './styles';

export default function Button({
  className,
  children,
  onClick,
  type,
  loading,
  disabled,
}) {
  return (
    <Container
      disabled={disabled}
      type={type}
      className={className && className}
      onClick={onClick && onClick}
    >
      {loading ? <Loader>...</Loader> : children}
    </Container>
  );
}

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  type: PropTypes.string.isRequired,
  loading: PropTypes.bool.isRequired,
  disabled: PropTypes.bool,
};

Button.defaultProps = {
  className: null,
  onClick: null,
  disabled: false,
};
