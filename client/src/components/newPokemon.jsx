import React, { useEffect } from 'react';
import { useState } from 'react';
import {Link} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import { getTypes, postNewPokemon } from '../store/actions';

export const NewPokemon = ()=>{
    let dispatch=useDispatch();
    let types = useSelector(store=>store.types)

    const [pokemon, setPokemon]=useState({
        image:'',
        name:'',
        type:[],
        hp:null,
        attack:null,
        defense:null,
        height:null,
        weight:null
    })
    
    function handleSubmit(e){
        e.preventDefault()
        dispatch(postNewPokemon(pokemon))
    }

    function onChange(e){
        if(e.target.name==='name')
            setPokemon({...pokemon,[e.target.name]:e.target.value})
        else if(e.target.name==='type')
            setPokemon({...pokemon,[e.target.name]:[...pokemon.type, Number (e.target.value)]})
        else if(e.target.name==='image')
            setPokemon({...pokemon,[e.target.name]:e.target.value})
        else setPokemon({...pokemon,[e.target.name]:Number(e.target.value)})
    }
    return(
        <div>
            <Link to='/pokemons'>
                <button>Volver</button>
            </Link>
            <form onSubmit={handleSubmit}>
                <label>Image 
                <input name='image' onChange={onChange}></input>
                </label>

                <label>Name 
                <input name='name' onChange={onChange}></input>
                </label>

                <label>Type 
                <select name='type' onChange={onChange}>
                    {types.map(type=>{
                        return(
                            <option key={type.id} value={type.name}>{type.name}</option>
                        )
                    })}
                </select>
                </label>

                <label>Health points
                <input name='hp' onChange={onChange}></input>
                </label>

                <label>Attack 
                <input name='attack' onChange={onChange}></input>
                </label>

                <label>Defense 
                <input name='defense' onChange={onChange}></input>
                </label>

                <label>Speed
                <input name='speed' onChange={onChange}></input>
                </label>

                <label>Height 
                <input name='height' onChange={onChange}></input>
                </label>

                <label>Weight 
                <input name='weight' onChange={onChange}></input>
                </label>

                <button type='submit' onChange={onChange}>Add Pokemon</button>
            </form>
        </div>
    )
}