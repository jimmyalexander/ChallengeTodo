import React, { useContext } from 'react'
import { Footer } from '../components/Footer'
import { Todo } from '../components/Todo'
import { TodoContext } from '../TodoContext'

export const Principal = () => {
  const {tema} = useContext(TodoContext)
  return (
    <div className='container_principal'>
      <section className='item-1'></section>
      <section className={ tema? 'item-light': 'item-2' }></section>
      <Todo />
      <Footer />
    </div>
  )
}
