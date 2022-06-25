import React from 'react';

export default PokemonDetails =(props)=>{
    return(
        <div>
            <img src={props.image}/>
            <h1>{props.name}</h1>
            <ul>{props.type.map(t=>{
                return(
                    <li>{t}</li>
                )
            })}</ul>
            <h2>Id: {props.id}</h2>
            <h2>Health points: {props.hp}</h2>
            <h2>Attack: {props.attack}</h2>
            <h2>Defense: {props.defense}</h2>
            <h2>Speed: {props.speed}</h2>
            <h2>Height: {props.height}</h2>
            <h2>Weight: {props.weight}</h2>
        </div>        
    )
}