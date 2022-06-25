import React from 'react';

export default Pokemon = (props)=>{
    return(
        <div>
            <img src={props.image}/>
            <h1>{props.name}</h1>
            <ul>{props.type.map(t=>{
                return(
                    <li>{t}</li>
                )
            })}</ul>
        </div>
    )
}