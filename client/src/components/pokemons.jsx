import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {Link} from 'react-router-dom'
import { getPokemons, getTypes, restorePokemons } from '../store/actions';
import { Pokemon } from './Pokemon';
import { SearchBar } from './SearchBar'
import { Settings } from './Settings';
import Loading from './Loading'
import './Pokemons.css'
const POKES_PER_PAGE = 12;

export default function Pokemons(){
    let pokes = useSelector(state=>state.displayedPokemons);
    let dispatch = useDispatch();
    let pokemons = [...pokes]
    const MAX_PAGES = Math.ceil(pokemons.length/POKES_PER_PAGE)

    const [page, setPage]= useState(1)
    pokemons = pokemons.slice((page-1)*POKES_PER_PAGE,page*POKES_PER_PAGE)
    function increasePage(){
        if(page<MAX_PAGES)
            setPage(page+1)
    }
    function decreasePage(){
        if(page>1){
            setPage(page-1)
        }
    }

    useEffect(()=>{
        dispatch(getPokemons())
        dispatch(getTypes())
    }, [dispatch])

    function restore(){
        dispatch(restorePokemons())
    }
    return(
        <div>
            <SearchBar />
            <button onClick={restore}>Restaurar</button>
            <Link to='/'>
                <button>Home</button>                
            </Link>
            
            {pokemons.length?<>
                <div className='pokemonsContainer'>
                    < Settings />
                    {pokemons.map(poke =>{
                    return(
                        <Pokemon pokemon={poke} /> 
                    )
                })}
                </div>
            </>:<><Loading /></>}
            <Link to='/newpokemon/'>
                <button className='addButton'>Add new Pokemon</button>
            </Link>
            <fieldset className='footer'>
                <div className='footerTitle'>
                    <div>Pages</div>
                    <button className='footerPage' onClick={decreasePage}>Prev...</button>
                    <div className='footerPage' >{page}</div>
                    <button onClick={increasePage} className='footerPage' >Next...</button>
                </div>                
            </fieldset>
        </div>
    )
}