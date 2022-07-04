import {GET_POKEMONS, GET_POKEMON_BY_ID} from '../actions'
  

const initialState={
    pokemons: [],
    sortedCharacters:[],
    filteredCharacters:[]
};

export default function actionReducer (state=initialState, action){
    switch(action.type){
        case GET_POKEMONS:
            return{
                ...state,
                pokemons: action.payload
            }
        case GET_POKEMON_BY_ID:
            return{
                ...state,
                
            }
        default:
            return state;
    }
};