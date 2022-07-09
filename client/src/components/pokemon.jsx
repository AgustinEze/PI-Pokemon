import React from 'react';
import { Link } from 'react-router-dom'
import './Pokemon.css'

export const Pokemon = (props)=>{
    const {image, name, type, id , types} = props.pokemon
    return(
        <div className='pokemonCard'>
            <Link to={`pokemons/${id}`}>
                {image?<><img className='pokemonImage' src={image}/></>:
                <><img src='https://phantom-marca.unidadeditorial.es/d1fbd39de50b6fa4abd17e058de4154f/crop/48x0/670x350/resize/828/f/webp/assets/multimedia/imagenes/2021/02/23/16140832349541.jpg'/></>}
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