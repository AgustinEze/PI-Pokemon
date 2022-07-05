import React from 'react';
import {Link} from 'react-router-dom'

export const NewPokemon = ()=>{
    return(
        <div>
            <Link to='/pokemons'>
                <button>Volver</button>
            </Link>
            <form>
                
            </form>
        </div>
    )
}