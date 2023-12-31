import { useState } from 'react';


// eslint-disable-next-line react/prop-types
export const AddCategory = ({ setCategories }) => {
    
    const [ inputValue, setInputValue ] =  useState('');

    const onInputChange = ({ target }) => {
        setInputValue( target.value )
    }
    // OTRA FORMA
    // const onInputChange = (event) => {
    //     setInputValue(event.target.value)
    // }

    const onSubmit = ( event ) => {
        event.preventDefault();
        if( inputValue.trim().length <= 1 ) return;

        setCategories( categories => [ inputValue, ...categories ]);
        setInputValue('');
    }
    
    
    
    return(
        <form onSubmit={ onSubmit }>
            <input 
                type="text" 
                placeholder="Buscar gifs"
                value={ inputValue }
                onChange={ onInputChange }
            />
        </form>
    )
}