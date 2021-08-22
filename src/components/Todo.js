import React, {  useContext, useEffect, useReducer, useRef, useState } from 'react'
import { TodoContext } from '../TodoContext';
import { todoReducer } from '../todoReducer';
import { Header } from './Header';
import { AiOutlineCheck } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
const init= () =>
  {
    return JSON.parse(localStorage.getItem('todos')) || [];
   /*  id: new Date().getTime(),
    desc: 'aprender  React',
    done: false,
    active: false */
  }

export const Todo = () => {
  const [todos, dispatch] = useReducer(todoReducer, [] ,init )
  const [form, setForm] = useState('')
  const sub = useRef();
  const {tema} = useContext(TodoContext)
  
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify( todos ))
  },[todos])


  const handleSubmit = (e) =>{
    e.preventDefault();

    
    const action ={
      type: 'add',
      payload: {
        id: new Date().getTime(),
        desc: form,
        done: false,
        active: false
      }
    }

    dispatch(action)
    sub.current.value = '';
  };

  const handleChange = (e) => {
    setForm(e.target.value)
  }

 const handleDelete = (todoId) => {
    const action={
      type:'delete',
      payload: todoId
    }
    dispatch(action)
 }

 const handleChecked = (todoId) => {
    const action={
      type:'select',
      payload: todoId
    }
    dispatch(action)
 }

 const handleComplete = (todoId) => {
  const action={
    type:'finish',
    payload: todoId
  }
  dispatch(action)
 }


 

  return (
    <div className={ tema ? 'light': 'container_todo' }  >
      <Header />
      <div className='todo'>
        <form  autoComplete='off' onSubmit={handleSubmit}>
          <input  ref={sub} onChange={ handleChange } type="text" name="newtodo" id="" placeholder='New Todo'  defaultValue={''}/>
        </form>

        <div className='container_view-todos'>
          {
            todos.map((tod, index)=>{
              return(
                <div className='view-todos' key={index} >
                  <div style={{display:'flex', alignItems:'center '}} >
                  {
                    tod.done?
                    '':
                    <input checked={!tod.active? false: true } onChange={ (e) =>{ 
                      handleChecked(tod.id);
                    }} 
                      type="checkbox" 
                      name="" 
                      id="" 
                    /> 
                  }
                  <p className={ tod.done? 'complete':'' } >{index + 1}. {tod.desc}</p>
                  </div>

                  <div className='todo_buttons'>
                    {
                      todos.map(to =>
                        to.active && tod.id === to.id?
                          <div style={{display:'flex'}} key={tod.id}>
                    
                              {
                                tod.done?
                                <AiOutlineCheck />:
                                <button disabled={tod.done? true: false} onClick={ () => handleComplete(tod.id) } 
                                style={{
                                    background: '#gray',
                                    fontSize:'12px',
                                    padding:'1px',
                                    color:'#333',
                                    borderRadius: '5px',
                                    cursor:'pointer',
                                    border: '0.1px solid gray'
                                    }} 
                                >
                                 Complete
                                </button>
                              }
                            

                            <p onClick={ () => handleDelete(tod.id) } 
                              style={{
                                    color:'#fff',
                                    cursor:'pointer'
                                    }} 
                            >
                            { <AiOutlineClose color={tema ? 'gray': ''} /> }
                            </p>
                              
                          </div>
                        :  ' '
                      )
                    }
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}
