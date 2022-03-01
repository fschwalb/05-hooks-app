import React, { useEffect, useState } from 'react'
import { Message } from './Message';

import './effects.css'

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        name: '',
        email: ''
    });

    const { name, email } = formState;

    useEffect( () => {

        // console.log('Hey!');

    }, []);

    useEffect( () => {

        // console.log('formState Cambió');

    }, [formState]);

    useEffect( () => {

        // console.log('eMail Cambió');

    }, [email]);

    const handleInputChange = ({ target }) => {

        setFormState({
            ...formState,
            [ target.name ]: target.value
        });

    };

    return (
        <>

            <h1>useEffect</h1>
            <hr />

            <div className="form-group">
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

            { (name === '123') && <Message /> }
            
        </>
    )
}
