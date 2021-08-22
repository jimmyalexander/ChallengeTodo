import React, { useState } from 'react';
import { Principal } from './pages/Principal';
import './styles/App.scss';
import { TodoContext } from './TodoContext';

export const App = () => {
  const [tema, setTema] = useState(false);
  return (
    <TodoContext.Provider value={
      {
        tema,
        setTema
      }
    }

    >
      <Principal />
    </TodoContext.Provider>
  )
}
