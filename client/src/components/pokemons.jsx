import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {Link} from 'react-router-dom'
import { getPokemons, getTypes, restorePokemons } from '../store/actions';
import { Pokemon } from './Pokemon';
import { SearchBar } from './SearchBar'
import { Settings } from './Settings';
import Loading from './Loading'

export default function Pokemons(){
    let pokemons = useSelector(state=>state.displayedPokemons);
    let dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getPokemons())
        dispatch(getTypes())
    }, [dispatch])

    function restore(){
        dispatch(restorePokemons())
    }
    return(
        <div>
            <SearchBar />
            <button onClick={restore}>Restaurar</button>
            <Link to='/'>
                <button>Home</button>                
            </Link>
            < Settings />
            {pokemons.length?<>{pokemons.map(poke =>{
                return(
                    <Pokemon pokemon={poke} /> 
                )
            })}
            </>:<><Loading /></>}
            <Link to='/newpokemon/'>
                <button>Add new Pokemon</button>
            </Link>   
        </div>
    )
}