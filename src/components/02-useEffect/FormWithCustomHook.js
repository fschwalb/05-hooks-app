import React, { useEffect } from 'react';

import { useForm } from '../../hooks/useForm';

import './effects.css'

export const FormWithCustomHook = () => {

    const [ formValues , handleInputChange ] = useForm({
        name: '',
        email: '',
        password: ''
    });

    const { name, email, password } = formValues;

    useEffect(() => {

        console.log( 'Email Cambió' );

    }, [ email ]);

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log( formValues );
    }

    return (
        <form onSubmit={ handleSubmit }>

            <h1>FormWithCustomHook</h1>
            <hr />

            <div className="form-group mt-5">
                <input 
                    type="text" 
                    name="name" 
                    className="form-control" 
                    placeholder="Tu Nombre..." 
                    autoComplete="off" 
                    value={ name } 
                    onChange={ handleInputChange }            
                />
            </div>

            <div className="form-group">
                <input 
                    type="text" 
                    name="email" 
                    className="form-control mt-3" 
                    placeholder="Tu Email..." 
                    autoComplete="off" 
                    value={ email } 
                    onChange={ handleInputChange }            
                />
            </div>

            <div className="form-group">
                <input 
                    type="password" 
                    name="password" 
                    className="form-control mt-3" 
                    placeholder="Tu Password..."  
                    value={ password } 
                    onChange={ handleInputChange }            
                />
            </div>

            <button type="submit" className="btn btn-primary mt-5">
                Guardar
            </button>
            
        </form>
    );
};
