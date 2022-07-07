import React from 'react';
import {useState} from 'react'
import axios from 'axios'
import { useDispatch } from 'react-redux';
import { getPokemonByName, restorePokemons } from '../store/actions';

export function SearchBar(){
    const [name, setName] = useState('');

    let dispatch = useDispatch()

    function onSubmit(e){
        e.preventDefault();
        dispatch(getPokemonByName(name))
    }

    function onChange(e){
        e.preventDefault();
        setName(e.target.value)
    }
    
    return(
        <div>
            <form onSubmit={onSubmit}>
                <input type='text' placeholder='Name...' onChange={onChange} value={name}/>
                <input type='submit' value='Search'/>
            </form>
                
        </div>
    )
}