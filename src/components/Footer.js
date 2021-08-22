import React, { useContext } from 'react';
import { AiFillLinkedin } from "react-icons/ai";
import { TodoContext } from '../TodoContext';


export const Footer = () => {
  const {tema } = useContext(TodoContext)
  return (
    <div className={ tema? ' footer_light': 'container_footer'}>
      <footer>
        <h2>Todo Challenge By Jimmy</h2>
        <a target='blank' href='https://www.linkedin.com/feed/'>
          <AiFillLinkedin color='#0e76a8' />
        </a>
      </footer>
    </div>
  )
}
