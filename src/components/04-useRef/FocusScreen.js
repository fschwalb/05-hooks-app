import React, { useRef } from 'react'

import '../02-useEffect/effects.css'

export const FocusScreen = () => {

    const inputRef = useRef();

    const handleClickÂ = () => {
        inputRef.current.select();
    }

    return (
        <div>
            <h3>Focus Screen</h3>
            <hr />

            <input 
                ref={ inputRef }
                className='form-control'
                placeholder='Su Nombre...'                            
            />

            <button 
                className='btn btn-outline-primary mt-5'
                onClick={ handleClickÂ }
            
            >
                Focus
            </button>
        </div>
    )
}
