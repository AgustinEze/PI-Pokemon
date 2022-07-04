import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {Link} from 'react-router-dom'
import { getPokemons } from '../store/actions';
import { Pokemon } from './Pokemon';
import { SearchBar } from './SearchBar'

export default function Pokemons(){
    let pokemons = useSelector(state=>state.pokemons)
    let dispatch = useDispatch()
    useEffect(()=>{
        dispatch(getPokemons())
    }, pokemons)
    return(
        
        <div>
            <SearchBar />
            <Link to='/'>
                <button>Home</button>                
            </Link>
            {pokemons.map(poke =>{
                return(
                    <Pokemon pokemon={poke} /> 
                )
            })}
            
            <Link to='/newpokemon/'>
                <button>Add new Pokemon</button>
            </Link>
        </div>
    )
}