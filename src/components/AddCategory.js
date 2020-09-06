//  snippet con rafc
import React, { useState } from 'react'
import PropTypes from 'prop-types'; //  importamos para definir tipo de datos de props

export const AddCategory = ({ setCategories }) => {

    //  si no definimos un valor por defecto para el useState será undefined
    const [ inputValue, setInputValue ] = useState(''); //  string  vacio


    const handleInputChange = (e) => {
        
        setInputValue( e.target.value );
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        //  evaluamos si el largo del valor ingresado es mayor a 2
        if ( inputValue.trim().length > 2 ) {

            //  setCategories puede ejecutar un callback
            setCategories( categories => [ inputValue, ...categories, ] );
            //  evitamos un doble posteo
            setInputValue('');
        }
    }

    //  cuando existe un elemento que envuelve a los demás elementos no es necesario poner la etiqueta fragment
    return (
        
        <form onSubmit={ handleSubmit }>
            <input
                className="form-control"
                placeholder="Buscar gifs..."
                type="text"
                value={ inputValue }
                onChange={ handleInputChange }
            />

        </form>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}
