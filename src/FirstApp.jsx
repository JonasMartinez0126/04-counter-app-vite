import React from 'react';
import PropTypes from 'prop-types';

export const FirstApp = ({ title, subtitle, nombre  }) => {
  return (
    <>
        <h1 data-testid="test-title" >{ title }</h1>
        <p>{ subtitle }</p>
        <p>{ subtitle }</p>
        <p>{nombre}</p>
    </>
  )
}

FirstApp.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.number.isRequired
}

FirstApp.defaultProps = {
  title: 'No hay titulo',
  subtitle: 123,
  nombre: 'Jonas Martinez'
}