//  los hooks son solo funciones
//  los hooks tambien pueden tener su estado
//  los hooks tambien pueden ejecutar efectos
import { useState, useEffect } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = ( category ) => {

    const [state, setstate] = useState({
        data: [],
        loading: true
    });

    // useEffect( () => {
    //     //  llamamos nuestra funcion
    //     getGifs( category ).then( images => {

    //         return setImages( images );
    //     });

    // }, [ category ]);

    useEffect( () => {

        getGifs( category ).then( images => {
            
            setstate({
                data: images,
                loading: false
            });

        })
        
    }, [category])

    return state; //    { data: [], loading: true }

}