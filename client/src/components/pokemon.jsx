import React from 'react';

export const Pokemon = (props)=>{
    const {image, name, type} = props.pokemon
    console.log('soy pokemon',props.pokemon)
    return(
        <div>
            <img src={image} alt='Not Found'/>
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