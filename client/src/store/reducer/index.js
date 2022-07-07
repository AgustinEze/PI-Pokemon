import {GET_POKEMONS, GET_POKEMON_BY_NAME,
    RESTORE_POKEMONS, GET_TYPES} from '../actions'
  

const initialState={
    pokemons: [],
    displayedPokemons:[],
    filter:{},
    sort:{},
    types:[]
};

export default function actionReducer (state=initialState, action){
    switch(action.type){
        case GET_POKEMONS:
            return{
                ...state,
                pokemons: action.payload,
                displayedPokemons: action.payload
            }
        case GET_POKEMON_BY_NAME:
            return{
                ...state,
                displayedPokemons: action.payload
            }
        case RESTORE_POKEMONS:
            return{
                ...state,
                displayedPokemons: [...state.pokemons],
                filter:{},
                sort: {}
            }
        case GET_TYPES:
            return{
                ...state,
                types: action.payload
            }
        default:
            return state;
    }
};