/*********************************/
/*            IMPORTS            */
/*********************************/

import React, { useEffect, useReducer } from 'react';

import { todoReducer } from './todoReducer';
import { useForm } from '../../hooks/useForm';

import './styles.css';

/*********************************/
/*          CODE START           */
/*********************************/

// Estado Inicial
const init = () => {

    return JSON.parse(localStorage.getItem('todos')) || [];

};

export const TodoApp = () => {

    // useReducer Hook
    const [ todos, dispatch ] = useReducer( todoReducer, [], init );

    // useForm Custom-Hook
    const [ { description }, handleInputChange, reset ] = useForm({
        description: ''
    });

    // Para guardar la info en el LocalStorage
    useEffect( () => {

        localStorage.setItem('todos', JSON.stringify( todos ));

    }, [todos] );

    // handleDelete para eliminar tareas
    const handleDelete = ( todoId ) => {

        const action = {
            type: 'delete',
            payload: todoId
        };

        dispatch( action );

    };

    // handleToggle para marcar tareas como completas
    const handleToggle = ( todoId ) => {
        
        dispatch({
            type: 'toggle',
            payload: todoId
        });

    };

    // handleSubmit para controlar el input
    const handleSubmit = (e) => {

        e.preventDefault();

        if ( description.trim().length <= 1 ) {
            return;
        };

        const newTodo = {
            id: new Date().getTime(),
            desc: description,
            done: false
        };

        const action = {
            type: 'add',
            payload: newTodo
        };

        dispatch( action );

        reset();

    };
    
    return (
        <div>

            <h1>TodoApp ({ todos.length })</h1>
            <hr />

            <div className='row'>

                <div className='col-7'>

                    <ul className='list-group-flush'>
                        {
                            todos.map( (todo, i) => (

                                <li 
                                    key={ todo.id }
                                    className='list-group-item'
                                > 
                                    <p 
                                        className={ `${ todo.done && 'complete' }` }
                                        onClick={ () => handleToggle( todo.id ) }
                                    > 
                                        { i +1 }. { todo.desc } 
                                    </p>
                                    
                                    <button 
                                        className='btn btn-danger'
                                        onClick={ () => handleDelete( todo.id ) }
                                    >
                                        Borrar
                                    </button>
                                </li>

                            ))
                        } 
                    </ul>

                </div>

                <div className='col-5'>

                    <h4>Agregar TODO</h4>
                    <hr />

                    <form onSubmit={ handleSubmit }>

                        <input 
                            type="text" 
                            name="description"
                            className="form-control"
                            placeholder="Aprender..." 
                            autoComplete="off" 
                            value={ description }
                            onChange={ handleInputChange }
                        />

                        <div className="d-grid">
                            <button
                                className='btn btn-outline-primary mt-3 btn-block'
                                type='submit'                    
                            >
                                Agregar
                            </button>                            
                        </div>


                    </form>

                </div>

            </div>
            
        </div>
    );

};

/*********************************/
/*           CODE END            */
/*********************************/