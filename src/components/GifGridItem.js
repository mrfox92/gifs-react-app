import React from 'react'

export const GifGridItem = ({ title, url }) => {

    // console.log( {id, title, url} );
    return (
        <>
        <div className="card animate__animated animate__fadeIn pointer">
            <img className="card-img-top" src={ url } alt={ title } />
            <div className="card-body">
                <h5 className="card-title"> { title } </h5>
            </div>
        </div>
        </>
    )
}
