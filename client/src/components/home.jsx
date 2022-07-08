import React from 'react';
import pokemon from '../img/pokemon.png'
import {Link} from 'react-router-dom'
import './Home.css'
export const Home = ()=>{
    return(
        <div className='home'>
            <img className='homeImg' src={pokemon} alt='Not found'/>
            <Link to="/pokemons">    
                <button className='homeBtn' type="button">
                    Gotta catch'em all!
                </button>
            </Link>
        </div>
    )
}