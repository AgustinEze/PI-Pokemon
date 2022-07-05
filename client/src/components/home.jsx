import React from 'react';
import pokemon from '../img/pokemon.png'
import {Link} from 'react-router-dom'

export const Home = ()=>{
    return(
        <div>
            <img src={pokemon} alt='Not found'/>
            <Link to="/pokemons">    
                <button type="button">
                    Gotta catch'em all!
                </button>
            </Link>
        </div>
    )
}