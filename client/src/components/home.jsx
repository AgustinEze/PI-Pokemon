import React from 'react';
import pokemon from '../img/pokemon.png'

export const Home = ()=>{
    return(
        <div>
            <img src={pokemon} alt='Not found'/>
            <button onClick>Gotta catch'em all!</button>
        </div>
    )
}