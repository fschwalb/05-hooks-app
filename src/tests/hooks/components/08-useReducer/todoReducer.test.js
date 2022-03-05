import React from 'react';
import { todoReducer } from "../../../../components/08-useReducer/todoReducer";
import { demoTodos } from '../../../fixtures/demoTodos';



describe('Pruebas en <todoReducer />', () => { 

    test('Debe de retornar el estado por defecto', () => { 

        const state = todoReducer( demoTodos, {} );

        expect( state ).toEqual( demoTodos );

    });

});