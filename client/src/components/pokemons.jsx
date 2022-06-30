import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPokemons } from '../store/actions';
import { Pokemon } from './Pokemon';

export default function Pokemons(){
    let pokemons = useSelector(state=>state.pokemons)
    let dispatch = useDispatch()
    useEffect(()=>{
        dispatch(getPokemons())
    }, [])
    return(
        <div>
            {pokemons.map(poke =>{
                console.log(poke)
                return(
                    <Pokemon pokemon={poke} /> 
                )
            })} 
        </div>
    )
}