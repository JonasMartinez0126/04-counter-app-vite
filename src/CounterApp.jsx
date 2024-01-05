import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const CounterApp = ({ name, value }) => {
  // cero es para inicializar el useState
  // counter es el valor
  // setcounter donde se realiza el cambia el valor de counter
  // cuando cambia el estado el componente vuelve a ejecutarse
  const [counter, setcounter] = useState(value);

  const handleAdd = () => {
    // el estado del counter cambio
    setcounter( counter + 1 );
  }

  const handleSubs = () => setcounter(counter - 1);
  
  const handleReset = () => setcounter(value);
  

  return (
    <>
        <h1> { name } </h1>
        <h2>{ counter }</h2>

        <button onClick={ handleAdd }>+1</button>
        <button onClick={ handleSubs }>-1</button>
        <button onClick={ handleReset }>Reset</button>
    </>
  )
}


CounterApp.propTypes = {
    value: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
}

CounterApp.defaultProps = {
    value: 123,
    name: 'Jonas Martinez'
}
  