import axios from 'axios';

export const GET_POKEMONS = 'GET_POKEMONS';
export const GET_POKEMON_BY_ID = 'GET_POKEMON_BY_ID';

export function getPokemons(){
    return function(dispatch){
        axios.get('http://localhost:3001/pokemons')
        .then(res=>{
            dispatch({
                type:GET_POKEMONS,
                payload: res.data
            })
        })
    }
}

export function getPokemonById(id){
    return function(dispatch){
        axios.get('http://localhost:3001/pokemons/'+id)
        .then(res=>{
            dispatch({
                type:GET_POKEMON_BY_ID,
                payload: res.data
            })
        })
    }
}