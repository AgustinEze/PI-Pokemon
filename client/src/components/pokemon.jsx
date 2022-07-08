import React from 'react';
import { Link } from 'react-router-dom'
import './Pokemon.css'

export const Pokemon = (props)=>{
    const {image, name, type, id , types} = props.pokemon
    return(
        <div className='pokemonCard'>
            <Link to={`pokemons/${id}`}>
                <img className='pokemonImage' src={image} alt='Not Found'/>
            </Link>
            <h3>{name}</h3>
            <ul>{type?.map(t=>{
                return(
                    <li>{t}</li>
                )
            })??types?.map(t=>{
                return(
                    <li>{t.name}</li>
                )
            })}</ul>
        </div>
    )
}