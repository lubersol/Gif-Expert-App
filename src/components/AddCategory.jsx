import { useState } from 'react';
import PropTypes from 'prop-types';

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
        <form onSubmit={ onSubmit } aria-label="form">
            <input 
                type="text" 
                placeholder="Buscar gifs"
                value={ inputValue }
                onChange={ onInputChange }
            />
        </form>
    )
}


//Para testing
AddCategory.propTypes = {
    onNewCategory: PropTypes.func.isRequired,
}
