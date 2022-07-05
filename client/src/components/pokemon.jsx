import React from 'react';
import { Link } from 'react-router-dom'

export const Pokemon = (props)=>{
    const {image, name, type, id , types} = props.pokemon
    return(
        <div>
            <Link to={`pokemons/${id}`}>
                <img src={image} alt='Not Found'/>
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