import React, { useContext } from 'react'
import Moon from '../assets/images/icon-moon.svg';
import Sun from '../assets/images/icon-sun.svg';
import { TodoContext } from '../TodoContext';

export const Header = () => {
  const {tema,setTema} = useContext(TodoContext);

  const handleTema = (e) => {
    setTema(!tema)
  }
  return (
    <div className='containerHeader'>
      <div className="container">
        <h1>Todo</h1>
        <img onClick={ handleTema } className='moon_icon' src={!tema? Moon: Sun} alt='moon' />
      </div>
    </div>
  )
}
