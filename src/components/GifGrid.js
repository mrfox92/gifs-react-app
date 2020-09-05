// import React, { useState, useEffect } from 'react'
import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'    //  importamos nuestro custom hook

import { GifGridItem } from './GifGridItem';
export const GifGrid = ({ category }) => {

    //  inicializamos el estado del componente
    // const [images, setImages] = useState([]);
    const { data: images, loading } = useFetchGifs( category );   //  desestructuramos nuesro objeto

    // console.log( state );
    //  recibe la funcion callback a ejecutar
    //  como segundo argumento recibe la lista de dependencias
    //  para este caso solo queremos que la función se ejecute cuando el componente
    //  es renderizado por primera vez

    

    return (

        <>
            <h3 className="text-light my-4 animate__animated animate__fadeIn"> { category } </h3>

            {/* Utilizamos la forma corta del operador ternario */}

            { loading && <p className="text-light animate__animated animate__pulse">Loading...</p> }

            <div className="card-columns">

                {
                    images.map( (image) => {
                        return <GifGridItem key={ image.id } { ...image } />
                    })
                }

                {/* <ol> */}
                    {/* {
                        images.map( image => {
                            return <li key={ image.id } > { image.title } </li>
                        })
                    } */}

                    {/* Podemos utilizar la desestructuración de objetos */}
                    {/* {
                        images.map( ({ id, title }) => (
                            <li key={ id } > { title } </li>
                        ))
                    } */}
                {/* </ol> */}
            </div>
        </>
    )
}
