import { renderHook, act } from '@testing-library/react-hooks';
import { useForm } from '../../hooks/useForm';

describe('Pruebas en useForm', () => { 

    const initialForm = {
        name: 'Fernando',
        email: 'fernando@email.com'
    };

    test('Debe de regresar un Form por defecto', () => { 

        const { result } = renderHook( () => useForm(initialForm) );
        const [ formValues, handleInputChange, reset ] = result.current;

        expect( formValues ).toEqual( initialForm );
        expect( typeof handleInputChange ).toBe( 'function' );
        expect( typeof reset ).toBe( 'function' );

    });

    test('Debe de cambiar el valor del Form (cambiar name)', () => { 

        const { result } = renderHook( () => useForm(initialForm) );
        const [ , handleInputChange ] = result.current;

        act( () => {

            handleInputChange({
                target: {
                    name: 'name',
                    value: 'Melissa'
                }
            });

        });

        const [ formValues ] = result.current;
        expect( formValues ).toEqual( { ...initialForm, name: 'Melissa' } );

    });

    test('Debe de restablecer el Form con RESET', () => { 

        const { result } = renderHook( () => useForm(initialForm) );
        const [ , handleInputChange, reset ] = result.current;

        act( () => {

            handleInputChange({
                target: {
                    name: 'name',
                    value: 'Melissa'
                }
            });

            reset();

        });

        const [ formValues ] = result.current;
        expect( formValues ).toEqual( initialForm );

    });

});