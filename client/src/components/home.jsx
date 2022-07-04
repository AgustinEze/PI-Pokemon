import React from 'react';
import pokemon from '../img/pokemon.png'
import {Link} from 'react-router-dom'

export const Home = ()=>{
    return(
        <div>
             <Link to="/pokemons">
                <img src={pokemon} alt='Not found'/>
                <button type="button">
                    Gotta catch'em all!
                </button>
            </Link>
        </div>
    )
}