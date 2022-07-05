import React from 'react';
import {useState, useEffect} from 'react'
import {useParams, Link} from 'react-router-dom';
import axios from 'axios'
import Loading from './Loading'

export function PokemonDetails(){
    const [pokemon, setPokemon] = useState(null)
    let {id} = useParams();
    useEffect(()=>{
        axios.get('http://localhost:3001/pokemons/'+id)
        .then(res=>setPokemon(res.data))
        return () => setPokemon(null)
    },[id])

    return(
        <div>
            <Link to='/pokemons'>
            <button>Volver</button>
            </Link>
            {pokemon?
            <>
            <img src={pokemon&&pokemon.image} alt='Not Found'/>
            <h1>{pokemon&&pokemon.name}</h1>
            <ul>{pokemon&&(pokemon.type?.map(t=>{
                return(
                    <li>{t}</li>
                )
            })??pokemon.types?.map(t=>{
                return(
                    <li>{t.name}</li>
                )
            }))}</ul>
            <h2>Id: {pokemon&&pokemon.id}</h2>
            <h2>Health points: {pokemon&&pokemon.hp}</h2>
            <h2>Attack: {pokemon&&pokemon.attack}</h2>
            <h2>Defense: {pokemon&&pokemon.defense}</h2>
            <h2>Speed: {pokemon&&pokemon.speed}</h2>
            <h2>Height: {pokemon&&pokemon.height}</h2>
            <h2>Weight: {pokemon&&pokemon.weight}</h2>
        </>
        :<div><Loading/></div>}
        </div>        
    )
}