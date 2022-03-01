/*********************************/
/*            IMPORTS            */
/*********************************/

import React, { useEffect, useReducer } from 'react';

import { todoReducer } from './todoReducer';
import { TodoList } from './TodoList';
import { TodoAdd } from './TodoAdd';

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

    const handleAddTodo = ( newTodo ) => {

        dispatch({
            type: 'add',
            payload: newTodo
        });

    };

    return (
        <div>

            <h1>TodoApp ({ todos.length })</h1>
            <hr />

            <div className='row'>

                <div className='col-7'>

                    <TodoList 
                        todos={ todos }
                        handleDelete={ handleDelete }
                        handleToggle={ handleToggle }
                    />

                </div>

                <div className='col-5'>

                    <TodoAdd 
                        handleAddTodo={ handleAddTodo }
                    />

                </div>

            </div>
            
        </div>
    );

};

/*********************************/
/*           CODE END            */
/*********************************/