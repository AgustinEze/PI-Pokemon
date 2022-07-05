import React from 'react';
import pokebola from '../img/pokebola.png'

export default function Loading(){
    return(
        <div>
            <img src={pokebola} alt=''/>
            <h3>Loading...</h3>
        </div>
    )
}