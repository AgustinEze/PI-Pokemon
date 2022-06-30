import {GET_POKEMONS} from '../actions'
  

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
        default:
            return state;
    }
};