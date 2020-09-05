import React, { Fragment, useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';


const GifExpertApp = () => {


    // const categories = ['one Punch', 'Samurai X', 'Dragon Ball'];
    const [ categories, setCategories ] = useState(['Rick and Morty']);


    // const handAdd = () => {
    //     //  forma 1 spread operator
    //     // setCategories( [...categories, 'Fullmetal Alchemist Brotherhoods'] );
    //     //  forma 2 callback + spread operator
    //     setCategories( elements => [ ...elements, 'Fullmetal Alchemist Brotherhoods' ]);
    // }



    return (
        <Fragment>
            <h2 className="text-white mb-4">GifExpertApp</h2>
            <AddCategory setCategories={ setCategories } />
            <hr/>

            <ol>
                { 
                    categories.map( category => {

                        // return <li key={ category }> { category } </li>;
                        //  utilizamos nuestro componente
                        return <GifGrid key={ category } category={ category } />
                    })
                }
            </ol>
        </Fragment>
    )
}


export default GifExpertApp;