import React from 'react';
import pokebola from '../img/pokebola.png'
import './Loading.css'

export default function Loading(){
    return(
        <div className='loading'>
            <img className='loadingImg' src={pokebola} alt=''/>
            <h3>Loading...</h3>
        </div>
    )
}