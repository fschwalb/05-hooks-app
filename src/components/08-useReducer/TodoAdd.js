import React from 'react';

import { useForm } from '../../hooks/useForm';

export const TodoAdd = ({ handleAddTodo }) => {

    // useForm Custom-Hook
    const [ { description }, handleInputChange, reset ] = useForm({
        description: ''
    });

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

        handleAddTodo( newTodo );

        reset();

    };

    return (
        <>
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
        </>
    );

};
