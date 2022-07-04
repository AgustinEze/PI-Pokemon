import React from 'react';
import { Link } from 'react-router-dom'

export const Pokemon = (props)=>{
    const {image, name, type, id} = props.pokemon
    return(
        <div>
            <Link to={`pokemons/${id}`}>
                <img src={image} alt='Not Found'/>
            </Link>
            <h1>{name}</h1>
            { 
                type &&
                <ul>
                    {type.map((t,i)=>{
                        return(
                            <li key={i}>{t}</li>
                        )
                    })}
                </ul>
            } 
        </div>
    )
}