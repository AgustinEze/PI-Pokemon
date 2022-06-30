import axios from 'axios';

export const GET_POKEMONS = 'GET_POKEMONS';

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